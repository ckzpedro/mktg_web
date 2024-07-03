import styles from './styles/Header.module.css'
import logo from '../../img/MarkeToGo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className={styles.placeholder}>
            <img src={logo} className={styles.logo} />
            <Link to="/item">Home</Link>
        </div>
    )
}
