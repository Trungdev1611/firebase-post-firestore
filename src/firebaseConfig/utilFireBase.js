import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebaseConfig";
import { toast } from "react-toastify";
export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider(app);
  const auth = getAuth();
  try {
    let dataUser = await signInWithPopup(auth, provider);
    console.log("login thanh cong", dataUser);
    return dataUser;
  } catch (error) {
    console.log("error Login", error);
    return null;
  }
}

export function showToastSuccess(message) {
  return toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

export function showToastError(message) {
  return toast.error(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

export const showClassbyAction = (isFullWidth, isHide) => {
  let classname = "createpost-wrapper";
  if (isFullWidth) {
    classname = classname + " fullwidth";
  }
  if (isHide) {
    classname = classname + " hideaction";
  }
  return classname;
};
