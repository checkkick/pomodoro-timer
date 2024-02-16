import styles from './buttondiscard.module.scss'

interface IButtonDiscard {
   name: string
   disabled?: boolean
}

export function ButtonDiscard({ name, disabled = false }: IButtonDiscard) {
   return (
      <button
         className={styles.btn}
         disabled={disabled}
      >{name}</button>
   );
}