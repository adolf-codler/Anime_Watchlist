import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext.jsx";
import { auth } from "../../firebase.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      console.log("onAuthStateChanged", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return unsub;
  }, []);
  const logout = () => signOut(auth);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
