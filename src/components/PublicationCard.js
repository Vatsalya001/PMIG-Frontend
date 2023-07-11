import React, { useState } from "react";
import styles from "../css/publicationCard.module.css";

const PublicationCard = (props) => {
  const { publication } = props;
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleEdit = () => {
    // Implement edit functionality
    console.log("Edit button clicked");
  };

  return (
    <div className={styles.pubCard}>
      <div className={styles.userDetails}>
        {/* <img alt="Profile" className={styles.profilePicture} /> */}
        <span className={styles.userName}>{publication.user.name}</span>
      </div>
      <div className={styles.publicationDetails}>
        <h3 className={styles.title}>{publication.title}</h3>
        <p className={styles.desc}>{publication.desc}</p>
      </div>
      <div className={styles.actionButtons}>
        {/* <button className={styles.likeButton} onClick={handleLike}>
          Like ({likes})
        </button> */}
        {/* {isCurrentUser && (
          <button className={styles.editButton} onClick={handleEdit}>
            Edit Paper
          </button>
        )} */}
      </div>
      <a href={publication.paper} className={styles.viewPaperButton}>
        Download Paper
      </a>
    </div>
  );
};

export default PublicationCard;
