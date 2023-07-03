import styles from "../css/button.module.css";
const Button = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span>{props.text}</span>
    </button>
  );
};

export default Button;
