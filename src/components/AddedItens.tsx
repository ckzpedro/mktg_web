import styles from "./styles/AddedItens.module.css";
import { Minus, Plus} from "@phosphor-icons/react";
import { useState } from "react";
import CardList from "./CardList";
import listImage from "../img/Checklist-bro.svg"

export default function AddedItens() {
  const [showItems, setShowItems] = useState(false);

  const list = [
    {
      title: "Item 2",
      quantity: "2",
      image: "https://placehold.co/70x100",
      cost: "R$:valor,00",

    },
    {
      title: "Item 2",
      quantity: "3",
      image: "https://placehold.co/70x100",
      cost: "R$:valor,00",
    },
    {
      title: "Item 3",
      quantity: "5",
      image: "https://placehold.co/70x100",
      cost: "R$:valor,00",
    },
    {
      title: "Item 4",
      quantity: "5",
      image: "https://placehold.co/70x100",
      cost: "R$:valor,00",
    },
    {
      title: "Item 5",
      quantity: "5",
      image: "https://placehold.co/70x100",
      cost: "R$:valor,00",
    },
  ];

  return (
    <div className={styles.itensbox}>
      <div className={styles.itensbox_title_box}>
        <h1 className={styles.itensbox_title}>Itens adicionados </h1>
        <button
            className={styles.button}
            onClick={() => setShowItems(!showItems)}
          >
            {showItems ? <Minus size={32} /> : <Plus size={32} />}
          </button>
      </div>
      {showItems && (
        <ul className={styles.list}>
          {list.map((item) => (
            <CardList
              title={item.title}
              quantity={item.quantity}
              image={item.image}
              cost={item.cost}
            />
          ))}
        </ul>
      )}
      {!showItems && (
        <div className={styles.placeholder}>
          <img className={styles.image} src={listImage}/>
          <p className={styles.image_text}>Os Itens da sua lista estão aqui!</p>
          <p className={styles.image_text}>Clique no <Plus size={20}/> para ver o que você já tem adicionado</p>
        </div>
      )}
    </div>
  );
}
//55
