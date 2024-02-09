import { TaskList } from '@/components/TaskList';
import styles from './main.module.scss'

export function MainPage() {
   return (
      <div className="container">
         <div className={styles.columns}>
            <div className={styles.tasks}>
               <h2 className={styles.tasks__title}>Ура! Теперь можно начать работать:</h2>

               <ul className={styles.tasks__list}>
                  <li className={styles.tasks__item}>
                     <p className={styles.tasks__text}>
                        Выберите категорию и напишите название текущей задачи
                     </p>
                  </li>
                  <li className={styles.tasks__item}>
                     <p className={styles.tasks__text}>
                        Запустите таймер («помидор»)
                     </p>
                  </li>
                  <li className={styles.tasks__item}>
                     <p className={styles.tasks__text}>
                        Работайте пока «помидор» не прозвонит
                     </p>
                  </li>
                  <li className={styles.tasks__item}>
                     <p className={styles.tasks__text}>
                        Сделайте короткий перерыв (3-5 минут)
                     </p>
                  </li>
                  <li className={styles.tasks__item}>
                     <p className={styles.tasks__text}>
                        Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена.
                        Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).
                     </p>
                  </li>
               </ul>

               <TaskList />
            </div>

            {/* Форма с запуском таймера */}
         </div>
      </div>
   );
}