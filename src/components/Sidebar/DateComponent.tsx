import { CalendarBlank } from '@phosphor-icons/react';
import styles from './styles/DateComponent.module.css'

export default function DateComponent() {
    
    const ActualDate = new Date()
    const formattedDate = `0${ActualDate.getDate()}/0${ActualDate.getMonth() + 1}/${ActualDate.getFullYear()}`;

    return (
    <div>
      <p className={styles.date}>{formattedDate.toLocaleString()}<span><CalendarBlank size={32} className={styles.calendar} /></span></p>
    </div>
  )
}
