import styles from "../css/publicationCard.module.css";
import React, { useState } from "react";

const PublicationCard = (props) => {
  const { title, paper, desc, isEditable } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDesc, setEditedDesc] = useState(desc);

  // const handleEditClick = () => {
  //   setIsModalOpen(true);
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   setEditedTitle(editedTitle);
  //   setEditedDesc(editedDesc);
  //   setIsModalOpen(false);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className={styles.pubCard}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <a href={paper}>View Paper</a>

      {/* {isEditable && <button onClick={handleEditClick}>Edit</button>} */}
      {/* 
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <form onSubmit={handleFormSubmit}>
            <label>
              Title:
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </label>
            <label>
              Description:
              <textarea
                value={editedDesc}
                onChange={(e) => setEditedDesc(e.target.value)}
              />
            </label>
            <button type="submit">Save</button>
          </form>
        </Modal>
      )} */}
    </div>
  );
};

export default PublicationCard;
