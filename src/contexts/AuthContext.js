import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <UserContext.Provider value={creatUser}>{children}</UserContext.Provider>
  );
};

export const UserAuth = () => {
  return UserContext(UserContext);
};
