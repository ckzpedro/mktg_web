import Title from './Title'
import styles from './Styles/HomeComponents.module.css'
import Itens from '../Itens/Itens'

export default function HomeComponents() {

    const list = [
        {
            image: 'https://placehold.co/160x230',
            title: 'string',
            market: 'string',
            pricediscont: 'string',
            pricefull: 'string'
        },
        {
            image: 'https://placehold.co/160x230',
            title: 'string',
            market: 'string',
            pricediscont: 'string',
            pricefull: 'string'
        }
    ]

    return (
        <div className={styles.page}>
            <p className={styles.texto}>Faça a sua lista de compras e<br />ajude a comunidade!</p>
            <Title
                title='MAIS PROCURADOS'
            />
            {list.map((item) => (
                <Itens
                    image={item.image}
                    title={item.title}
                    market={item.market}
                    pricediscont={item.pricediscont}
                    pricefull={item.pricefull}
                />
            ))}
            <Title
                title='Mais Produtos:'
            />
        </div>
    )
}