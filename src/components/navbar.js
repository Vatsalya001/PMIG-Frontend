import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/navbar.module.css";
import { Button } from "/";
import { useAuth } from "../hooks";

const Navbar = () => {
  const auth = useAuth();
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
            <Link to={`/Profile`}>
              <Button text={auth.user.username} />
            </Link>
            <Button
              text="Logout"
              onClick={() => {
                auth.logout();
              }}
            />
            <Link to="/publish">
              <Button text="Publish Paper" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
