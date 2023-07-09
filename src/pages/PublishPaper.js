import React, { useState } from "react";
import styles from "../css/publishPaper.module.css";
import { publish_API } from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../components";
import { Link } from "react-router-dom";
const PublishPaper = () => {
  const [title, setTitle] = useState("");
  const [paper, setPaper] = useState(null);
  const [description, setDescription] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    if (title !== "" && description !== "" && paper !== null) {
      let res = await publish_API(paper, title, description);
      if (res.success) {
        setTitle("");
        setDescription("");
        setPaper(null);
        toast(`Paper Published Successfully!`, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast(`${res.message}`, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <div>
      <form className={styles.form} encType="multipart/form-data">
        <input
          type="text"
          className={styles.inputField}
          placeholder="Paper Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className={styles.inputField}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          className={styles.inputField}
          name="file"
          onChange={(e) => {
            setPaper(e.target.files[0]);
          }}
        />
        <Button text="PublishPaper" onClick={handleClick} />
        <Link to="/">
          <Button text="Cancel" />
        </Link>
      </form>
    </div>
  );
};

export default PublishPaper;
