import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext, createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userDefined, setUserDefined] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDefined(user);
        return;
      }
    });
    return () => unsubscribe();
  }, [auth]);
  return (
    <AuthContext.Provider value={{ userDefined }}>
      {children}
    </AuthContext.Provider>
  );
}
export const UsegetUserContext = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
