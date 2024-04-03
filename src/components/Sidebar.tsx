import AddedItens from './AddedItens';
import styles from './Sidebar.module.css'
import Date from './DateComponent';

export default function Sidebar() {

  return (
    <div className={styles.placeholder}>
      <h1 className={styles.sidetitle}>Sua Lista:</h1>
      <Date />
      <AddedItens />
    </div>
  )
}
