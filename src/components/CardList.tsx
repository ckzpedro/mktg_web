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
      <img className={styles.image} src={image}/>
      <div className={styles.card_content}>
        <h1 className={styles.card_title}>{title}</h1>
        <p className={styles.card_values}>{`${quantity} x ${cost}`}</p>
      </div>
    </div>
  )
}
