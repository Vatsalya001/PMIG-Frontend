import styles from "../css/publicationCard.module.css";

const PublicationCard = (props) => {
  const { title, paper, desc } = props;
  return (
    <div className={styles.pubCard}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <a href={paper}>View Paper</a>
    </div>
  );
};
export default PublicationCard;
