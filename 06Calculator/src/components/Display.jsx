import styles from "./Display.module.css";

const Display = ({displayval}) => {
  return <input className={styles.display} type="text" value={displayval} readOnly />;
};

export default Display;