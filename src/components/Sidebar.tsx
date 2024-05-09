import AddedItens from './AddedItens';
import DateComponent from './DateComponent';
import SelectedMarket from './SelectedMarkets';

import styles from './styles/Sidebar.module.css'

export default function Sidebar() {

  return (
    <div className={styles.sidebar_box}>
      <h1 className={styles.sidetitle}>Sua Lista:</h1>
      <DateComponent />
      <AddedItens />
      <SelectedMarket />
    </div>
  )
}