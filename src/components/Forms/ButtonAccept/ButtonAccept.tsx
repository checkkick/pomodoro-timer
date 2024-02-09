import styles from './buttonaccept.module.scss'

interface IButtonAccept {
   name: string
}

export function ButtonAccept({ name }: IButtonAccept) {
   return (
      <button className={styles.btn}>{name}</button>
   );
}