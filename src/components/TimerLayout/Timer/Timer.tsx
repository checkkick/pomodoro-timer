import { ButtonAccept } from '@/components/Forms/ButtonAccept';
import styles from './timer.module.scss'
import { ButtonDiscard } from '../../Forms/ButtonDiscard';
import { TimerAddButton } from './TimerAddButton';

export function Timer() {
   return (
      <div className={styles.block}>
         <div className={styles.addBtn}>
            <TimerAddButton />
         </div>
         <p className={styles.watches}>26:00</p>
         <p className={styles.taskName}>
            <span className={styles.taskName__accent}>Задача 1 - </span> Сверстать сайт
         </p>
         <div className={styles.controls}>
            <ButtonAccept name='Старт' />
            <ButtonDiscard name='Стоп' disabled />
         </div>
      </div>
   );
}