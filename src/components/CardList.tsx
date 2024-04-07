import styles from './styles/CardList.module.css'; 

interface CardProps {
    title: string;
    quantity: string;
    image: string;
    cost: string;
  
  }

export default function CardList({ title, quantity, image, cost }: CardProps) {

  return (
    <div className={styles.card}>
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_values}>{`${quantity} x ${cost}`}</p>
    </div>
  )
}
