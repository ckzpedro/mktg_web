import { Minus, Plus } from '@phosphor-icons/react'
import styles from './Styles/Itens.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

interface ItensProps {
    image: string,
    title: string,
    market: string,
    pricediscont: string,
    pricefull: string
}

export default function Itens({ image, title, market, pricediscont, pricefull }: ItensProps) {

    const [count, setCount] = useState(0);
    const adicionar = () => {
        setCount(prevCount => prevCount + 1);
    };

    const diminuir = () => {
        setCount(prevCount => Math.max(prevCount - 1, 0));
    };

    return (
        <div className={styles.placeholder}>
            <Link to={'/item'}>
                <div className={styles.box}>
                    <img className={styles.image} src={image} alt="" />
                </div>
            </Link>
            <div className={styles.texts}>
                <p className={styles.title}>{title}</p>
                <p className={styles.market}>{market}</p>
                <p className={styles.discont}>{pricediscont} <span className={styles.full}>{pricefull}</span></p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.button2}>
                    <span>
                        <button className={styles.minusandplus} onClick={adicionar}>
                            <Plus />
                        </button>
                    </span>
                    {count}
                    <span>
                        <button className={styles.minusandplus} onClick={diminuir}>
                            <Minus />
                        </button>
                    </span>
                </div>
                <button className={styles.button}>Adicionar a lista de compras</button>
            </div>
        </div>
    )
}