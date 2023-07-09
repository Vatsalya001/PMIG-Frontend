import styles from "../css/button.module.css";
const Button = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick} type={props.type}>
      <span>{props.text}</span>
    </button>
  );
};

export default Button;
