import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { IoIosResize, IoMdClose } from "react-icons/io";
import { BsImages, BsEmojiSmile } from "react-icons/bs";
import styled from "styled-components";
import { MdOutlineAttachFile } from "react-icons/md";
import { showClassbyAction } from "../firebaseConfig/utilFireBase";
import { actionPostHeader } from "../constant";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
const CreatePostContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 80px);
  .ck-editor {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100%;
  }
  .ck-editor__editable {
    min-height: 100% !important;
  }

  .createpost-wrapper {
    width: 60%;
    height: 70%;
    border: 1px solid #aaa;
    min-width: 800px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    &.fullwidth {
      width: 90%;
      height: 90%;
    }
    &.hideaction {
      position: fixed;
      top: 80%;
    }
    .createpost-header {
      display: flex;
      justify-content: space-between;
      background-color: rgba(0, 0, 0, 0.6);
      color: whitesmoke;
      font-weight: 500;
      padding: 10px 20px;

      & .action-post {
        display: flex;
        gap: 15px;
        color: whitesmoke;
        span {
          cursor: pointer;
          &:hover {
            color: white;
          }
        }
      }
    }
    .post-main {
      display: grid;
      grid-template-rows: auto 1fr;
      .post-heading {
        padding-left: 20px;
        border-bottom: 0.1px solid #ccc;
        input {
          width: 100%;
          height: 100%;
          padding-bottom: 10px;
          padding-top: 10px;
          border: none;
          outline: none;
        }
      }
      .post-main__content {
        padding: 10px 20px;
      }
    }
    .footerpage {
      border-top: 0.1px solid #ccc;
      display: flex;
      align-items: center;
      padding: 5px;
      gap: 80px;
      .btn-send {
        padding: 10px 15px;
        background-color: #76b5c5;
        border-radius: 3px;
        border: none;
        color: whitesmoke;
        margin-left: 10px;
        min-width: 100px;
        transition: 0.3s;
        &:hover {
          background-color: #3e9aa2;
        }
      }
      .footer-action {
        color: #666;
        display: flex;
        gap: 20px;
        span {
          font-size: 20px;
        }
      }
    }
  }
`;

const CreatePost = () => {
  const [isFullWidth, setIsfullWidth] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [dataInfo, setDataInfo] = useState({
    title: null,
    content: null,
    imgLink: [],
  });
  const [listFile, setListFile] = useState([]);
  const navigate = useNavigate();
  //FullwidthResize
  function handleResize(number) {
    if (number === actionPostHeader.resize) {
      setIsfullWidth(!isFullWidth);
      return;
    }
    if (number === actionPostHeader.hide) {
      setIsHide(!isHide);
    }
    if (number === actionPostHeader.close) {
      navigate("/");
    }
  }

  function handleChangeFile(e) {
    //list file
    console.log(e.target.files);
    setListFile([...e.target.files]);
  }
  console.log("listFile:::", typeof listFile);
  //upload to firebasestore
  async function uploadFileToStorageFirebase(file) {
    const storage = getStorage();
    return new Promise(function (resolve, reject) {
      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: "image/jpeg",
      };

      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, "images/" + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              return;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
            default:
              return;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL);
          });
        }
      );
    });
  }
  async function handleSendDatTofirebase() {
    let listFilePromise = listFile.map((fileItem) => {
      return uploadFileToStorageFirebase(fileItem);
    });

    console.log("listFile", listFilePromise);
    let uploadFileTogetUrl = await Promise.all(listFilePromise);
    console.log("dataInfo", uploadFileTogetUrl);
  }
  return (
    <CreatePostContainer>
      <div className={showClassbyAction(isFullWidth, isHide)}>
        <div className="createpost-header">
          <div className="title-post">New Post</div>
          <div className="action-post">
            <span>
              <AiOutlineMinus
                onClick={() => handleResize(actionPostHeader.hide)}
              />
            </span>
            <span onClick={() => handleResize(actionPostHeader.resize)}>
              <IoIosResize />
            </span>
            <span>
              <IoMdClose onClick={() => handleResize(actionPostHeader.close)} />
            </span>
          </div>
        </div>
        <div className="post-main">
          <div className="post-heading">
            <input
              type="text"
              placeholder="Your Title Post..."
              name="title"
              onChange={(e) =>
                setDataInfo({ ...dataInfo, title: e.target.value })
              }
            />
          </div>
          <div className="post-main__content">
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log(data);
                setDataInfo({ ...dataInfo, content: data });
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
        </div>
        <div className="footerpage">
          <button className="btn-send" onClick={handleSendDatTofirebase}>
            Gửi
          </button>
          <div className="footer-action">
            <label htmlFor="addimage">
              <span>
                <BsImages />
              </span>
            </label>
            <input
              type="file"
              hidden
              id="addimage"
              accept=".jpg, .png"
              onChange={handleChangeFile}
              multiple
            />
            <label htmlFor="addfile">
              <span>
                <MdOutlineAttachFile />
              </span>
            </label>
            <input type="file" hidden id="addfile" />
            <span>
              <BsEmojiSmile />
            </span>
          </div>
        </div>
      </div>
    </CreatePostContainer>
  );
};

export default CreatePost;
