import clsx from "clsx";
import styles from "./navbar.module.css";
import { useAuth } from "../context/useAuth";
const Navbar = () => {
  const { logout, user } = useAuth();
  if (!user) return null;
  const handleLogOut = async () => {
    try {
      await logout();
      console.log("logged out");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={clsx(styles.view)}>
      <button onClick={handleLogOut}>LogOut</button>
      <label>{user?.email}</label>
    </div>
  );
};

export default Navbar;
