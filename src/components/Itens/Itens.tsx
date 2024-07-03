import styles from './Styles/Itens.module.css'

interface ItensProps {
    image: string,
    title: string,
    market: string,
    pricediscont: string,
    pricefull: string
}

export default function Itens({ image, title, market, pricediscont, pricefull }: ItensProps) {
    return (
        <div className={styles.placeholder}>
            <div className={styles.box}>
                <img className={styles.image} src={image} alt="" />
            </div>
            <p className={styles.title}>{title}</p>
            <p className={styles.market}>{market}</p>
            <p className={styles.discont}>{pricediscont} <span className={styles.full}>{pricefull}</span></p>
        </div>
    )
}