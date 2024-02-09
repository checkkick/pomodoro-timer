import { ButtonAccept } from '../Forms/ButtonAccept';
import styles from './tasklist.module.scss'
import { TextField } from '@components/Forms/TextField'

export function TaskList() {
   return (
      <div className={styles.column}>
         <TextField />
         <ButtonAccept name='Добавить' />
      </div>
   );
}