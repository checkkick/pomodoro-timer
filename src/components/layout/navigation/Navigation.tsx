import styles from './Navigation.module.scss'
import TomatoLogo from '@assets/images/tomato.svg'
import StatisticLogo from '@assets/images/equalizer.svg'

export function Navigation() {
   return (
      <nav className={styles.nav}>
         <div className='container'>
            <ul className={styles.nav__list}>
               <li className={styles.nav__item}>
                  <a href="/" className={styles.logo}>
                     <img src={TomatoLogo} className={styles.logo__image} alt="tomato logo" />
                     <p className={styles.logo__text}>pomodoro_box</p>
                  </a>
               </li>
               <li className={styles.nav__item}>
                  <a href="/" className={styles.statistic}>
                     <img src={StatisticLogo} className={styles.statistic__image} alt="statistic logo" />
                     <p className={styles.statistic__text}>Статистика</p>
                  </a>
               </li>
            </ul>
         </div>
      </nav>
   );
}