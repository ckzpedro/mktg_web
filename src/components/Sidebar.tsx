import AddedItens from './AddedItens';
import styles from './styles/Sidebar.module.css'
import Date from './DateComponent';

export default function Sidebar() {

  return (
    <div className={styles.sidebar_box}>
      <h1 className={styles.sidetitle}>Sua Lista:</h1>
      <Date />
      <AddedItens />
    </div>
  )
}
