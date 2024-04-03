import AddedItens from './AddedItens';
import styles from './Sidebar.module.css'
import { CalendarBlank } from '@phosphor-icons/react';

export default function Sidebar() {

  const ActualDate = new Date();
  const formattedDate = `0${ActualDate.getDate()}/0${ActualDate.getMonth() + 1}/${ActualDate.getFullYear()}`;


  return (
    <div className={styles.placeholder}>
      <h1 className={styles.sidetitle}>Sua Lista:</h1>
      <p className={styles.date}>{formattedDate.toLocaleString()}<span><CalendarBlank size={32} className={styles.calendar} /></span></p>
      <AddedItens />
    </div>
  )
}
