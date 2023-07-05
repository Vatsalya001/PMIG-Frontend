import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/navbar.module.css";
import { Button } from "/";
import { useAuth } from "../hooks";
import { useGlobalContext } from "../providers/modalProvider";

const Navbar = () => {
  const auth = useAuth();
  const {openModal} = useGlobalContext();
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>PMIG</div>
      <div className={styles.right}>
        {!auth.user ? (
          <Link to="/auth">
            <Button text="Login" />
          </Link>
        ) : (
          <div>
            <Button text={auth.user.username} />
            <Button
              text="Logout"
              onClick={() => {
                auth.logout();
              }}
            />
            <Button text="Publish" onClick={openModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
