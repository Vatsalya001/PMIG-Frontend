import React from "react";
import styles from "../css/homepage.module.css";
import { useState, useEffect } from "react";
import { Loader } from "../components";
import { getAllPublications_API } from "../api";
import { PublicationCard } from "../components";
const HomePage = () => {
  const [pubs, setPubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPubs = async () => {
      setLoading(true);
      const res = await getAllPublications_API();
      if (res.success == true) {
        console.log(res);
        setPubs(res.data.publications);
      }
      setLoading(false);
    };
    fetchPubs();
  }, []);

  return (
    <div className={styles.homepage}>
      {loading ? (
        <Loader />
      ) : (
        <ul className={styles.pubs}>
          {pubs.map((pub) => (
            <li className={styles.pub}>
              <PublicationCard
                title={pub.title}
                desc={pub.description}
                paper={pub.paper}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
