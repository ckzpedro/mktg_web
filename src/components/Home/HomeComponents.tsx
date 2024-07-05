import Title from './Title'
import styles from './Styles/HomeComponents.module.css'
import Itens from '../Itens/Itens'

export default function HomeComponents() {

    const list = [
        {
            image: 'https://placehold.co/160x230',
            title: 'Leite UHT integral 1L Betânia ',
            market: 'Mercado Vida Longa',
            pricediscont: 'R$:3,50',
            pricefull: 'R$:4,05'
        },
        {
            image: 'https://placehold.co/160x230',
            title: 'Arroz Tio João tipo 1 - 1 Kg',
            market: 'Mercado Boníssima',
            pricediscont: 'R$:6,80',
            pricefull: 'R$:7,49'
        },
        {
            image: 'https://placehold.co/160x230',
            title: 'Feijão Carioca Kicaldo - 1kg',
            market: 'Mercado Cogumelos',
            pricediscont: 'R$:7,23',
            pricefull: 'R$:8,49'
        },
        {
            image: 'https://placehold.co/160x230',
            title: 'Arroz Tio João tipo 1 - 1 Kg',
            market: 'Mercado Boníssima',
            pricediscont: 'R$:6,80',
            pricefull: 'R$:7,49'
        }
    ]

    return (
        <div className={styles.page}>
            <p className={styles.texto}>Faça a sua lista de compras e<br />ajude a comunidade!</p>
            <div className={styles.products}>
                <Title title='MAIS PROCURADOS' />
                <div className={styles.itens}>
                    {list.map((item) => (
                        <Itens
                            image={item.image}
                            title={item.title}
                            market={item.market}
                            pricediscont={item.pricediscont}
                            pricefull={item.pricefull}
                        />
                    ))}
                </div>
                <Title title='Mais Produtos:' />
            </div>
        </div>
    )
}