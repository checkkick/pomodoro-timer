import { ChangeEvent, useState } from 'react';
import styles from './textfield.module.scss'

export function TextField() {
   const [inputValue, setInputValue] = useState('')

   function changeHandler(event: ChangeEvent<HTMLInputElement>) {
      setInputValue(event.target.value)
   }

   return (
      <input
         type="text"
         className={styles.input}
         value={inputValue}
         onChange={changeHandler}
         placeholder='Название задачи'
      />
   );
}