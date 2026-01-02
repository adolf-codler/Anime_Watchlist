import clsx from "clsx";
//import { db } from "../../firebase.js";
//import { getdoc, updateDoc, collection } from "firebase/firestore";
import styles from "./navbar.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.js";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navi = useNavigate();
  const logOut = async () => {
    try {
      await signOut(auth);
      navi("/signup");
      console.log("logged out");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={clsx(styles.view)}>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
};

export default Navbar;
