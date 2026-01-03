import Item from "../components/list_item.jsx";
import styles from "./home.module.css";
import { useState } from "react";
import clsx from "clsx";
import Navbar from "../components/navbar.jsx";

const Home = () => {
  const [watchlist, setWatchlist] = useState(0);
  return (
    <>
      <Navbar />
      <div className={clsx(styles.view)}>
        {Array.from({ length: watchlist }).map((_, index) => (
          <Item key={index} />
        ))}
        <button
          className={clsx(styles.add)}
          onClick={() => setWatchlist((prev) => prev + 1)}
        >
          <label style={{ fontWeight: "bolder", fontSize: "24px" }}>+</label>
        </button>
      </div>
    </>
  );
};

export default Home;
