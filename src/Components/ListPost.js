import React, { useState } from "react";
import styled from "styled-components";
import PostItem from "./PostItem";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { app } from "../firebaseConfig/firebaseConfig";
const ListPostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  grid-gap: 10px;

  justify-content: center;
`;
const ListPost = () => {
  const [listPost, setListPost] = useState([]);
  const db = getFirestore(app);
  async function getDataFireBase() {
    const q = query(collection(db, "InfoPost"));

    const querySnapshot = await getDocs(q);
    console.log("querySnap:::", querySnapshot);
    let datafromfireBase = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      datafromfireBase.push({ id: doc.id, ...doc.data() });
    });
    setListPost(datafromfireBase);
  }
  getDataFireBase();
  console.log("listPosst:::", listPost);
  return (
    <ListPostWrapper>
      {listPost.length > 0 &&
        listPost.map((item) => {
          return <PostItem key={item.id} postData={item} />;
        })}
    </ListPostWrapper>
  );
};

export default ListPost;
