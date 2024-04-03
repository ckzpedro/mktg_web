import styles from './Addeditens.module.css'
import { Minus } from '@phosphor-icons/react';

export default function AddedItens() {
  return (
      <div className={styles.itensbox}>
        <h1 className={styles.itensboxtitle}>Itens adicionados <button className={styles.button}><Minus size={32}/></button></h1>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
  )
}
