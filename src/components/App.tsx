import todoLogo from "../assets/react.svg";
import styles from "../components/styles/Header.module.css";

export function App(){
    return (
        <header className={styles.header}>
          <img src={todoLogo} className={styles.logo} />
          <p className={styles.p}> Market To Go Web</p>
        </header>
    );
}