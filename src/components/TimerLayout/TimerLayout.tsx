import { Timer } from './Timer/Timer';
import styles from './timerlayout.module.scss'

export function TimerLayout() {
   return (
      <div className={styles.display}>
         <div className={styles.display__bar}>
            <h3 className={styles.title}>Сверстать сайт</h3>
            <h4 className={styles.subtitle}>Помидор 1</h4>
         </div>
         <div className={styles.task}>
            <Timer />
         </div>
      </div>
   );
}