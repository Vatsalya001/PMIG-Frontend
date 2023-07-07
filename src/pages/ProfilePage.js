import React, { useEffect, useState } from "react";
import { Button } from "../components";
import styles from "../css/auth.module.css";
import { Loader } from "../components";
import { useAuth } from "../hooks";
import { fetchUser } from "../../../PMIG-Backend-1/controllers/api/v1/users_apis";
import EditUserInfoModal from 'path/to/EditUserInfoModal';

const ProfilePage = () => {
  const auth = useAuth();
  const [user, setUserData] = useState([]);
  const [loading, setLoading] = usestate(true);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const handleEditClick = () => {
    setEditModalOpen(true);
  };
  const handleCloseModal = () => {
    setEditModalOpen(false);
  };



  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const res = await fetchUser();
      if (res.success === true) {
        console.log(res);
        setUserData(res.data.user);
      }
      setLoading(false);
    };
    fetchUserData();
  }, []);

  return (
    <div className={styles.authPage}>
      {loading ? (
        <Loader />
      ) : (
        <><h2>Profile</h2>
        <p>Username= {user.username}</p>
        <p>Name= {user.name}</p>
        <p>About= {user.about}</p>
        <p>Publications={user.publications}</p></>
      )}
      <Button text ="EDIT" onClick={EditUserInfoModal} />
    </div>
  );
};

export default ProfilePage;