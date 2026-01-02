import { useState } from "react";
//import { getDoc, collection, getDocs, updateDoc } from "firebase/firestore";
//import { auth, db } from "../../firebase.js";
import clsx from "clsx";
import styles from "./list_item.module.css";

//main function
const Item = () => {
  //states
  const [completed, setCompleted] = useState(false);
  const [read, setRead] = useState(false);
  const [title, setTitle] = useState("");
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={clsx(styles.item, {
        [styles.completed]: completed,
        [styles.expand]: expand,
        [styles.read]: read,
      })}
      onClick={() => setExpand((prev) => !prev)}
    >
      {!expand && <text>{title}</text>}
      {expand && (
        <>
          <div>
            <input
              placeholder="Name of the series"
              type="text"
              onClick={(e) => e.stopPropagation()}
              onChange={(input) => setTitle(() => input.target.value)}
            />
          </div>
          <div>
            Completed
            <input
              type="checkbox"
              checked={completed}
              onClick={(e) => e.stopPropagation()} //e = events(what just happened) and on click we are stopping the propagation of event to parent
              onChange={() => setCompleted((prev) => !prev)} //for change in value of checkbox
            />
            Manga
            <input
              type="checkbox"
              checked={read}
              onClick={(e) => e.stopPropagation()} //e = events(what just happened) and on click we are stopping the propagation of event to parent
              onChange={() => setRead((prev) => !prev)} //for change in value of checkbox
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
