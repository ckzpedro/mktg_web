import styles from "./styles/Header.module.css";
import logo from "../../img/MarkeToGo.svg";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} className={styles.logo} />
      </div>
      <div className={styles.options}>
        <a>Alimentos</a>
        <a>Bebidas</a>
        <a>Limpeza</a>
      </div>
      <div className={styles.container}>
        <MagnifyingGlass size={15} />
        <input type="text" placeholder="Pesquisar" />
      </div>
    </header>
  );
}
