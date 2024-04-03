import styles from './Addeditens.module.css'
import { Minus, Plus } from '@phosphor-icons/react';
import { useState } from 'react';

export default function AddedItens() {
  const [showItems, setShowItems] = useState(true);


  return (
      <div className={styles.itensbox}>
        <h1 className={styles.itensboxtitle}>
          Itens adicionados
          <button className={styles.button} onClick={() => setShowItems(!showItems)}>
          {showItems ? <Minus size={32}/> : <Plus size={32}/>}
          </button>
        </h1>
        {showItems && (
          <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
        )}
      </div>
  )
}
