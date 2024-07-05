import styles from './styles/InfoItem.module.css'

interface ItemProps {
    image: string
    title: string,
    market: string,
    pricediscont: string,
    pricefull: string,
    description: string
}

export default function InfoItem({ image, title, market, pricediscont, pricefull, description }: ItemProps) {
    return (
        <div>
            <div className={styles.holder}>
                <img className={styles.image} src="https://placehold.co/380x570" alt="" />
                <div className={styles.texts}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.market}>{market}</p>
                    <p className={styles.discont}>{pricediscont} <span className={styles.full}>{pricefull}</span></p>
                </div>
            </div>
        </div>
    )
}
