import React, { useState } from "react";
import { Button, EditUserInfoModal } from "../components";
import styles from "../css/auth.module.css";
import { useAuth } from "../hooks";

const ProfilePage = () => {
  const auth = useAuth();
  const user = auth.user;
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const handleEditClick = () => {
    setEditModalOpen(true);
  };
  const handleCloseModal = () => {
    setEditModalOpen(false);
  };

  return (
    <div className={styles.authPage}>
      <h2>Profile</h2>
      <p>Username= {user.username}</p>
      <p>Name= {user.name}</p>
      <p>About= {user.about}</p>
      <p>Publications={user.publications}</p>

      <Button
        text="EDIT"
        onClick={() => {
          handleEditClick();
        }}
      />
      {isEditModalOpen ? (
        <EditUserInfoModal user={auth.user} onClose={handleCloseModal} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProfilePage;
