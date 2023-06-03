import loading from "../../assets/loading.svg";

import styles from "./Loading.modules.css";

function Loading() {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loading} alt="Loading"></img>
    </div>
  );
}

export default Loading;
