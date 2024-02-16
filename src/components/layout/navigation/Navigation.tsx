import styles from './Navigation.module.scss'
import TomatoLogo from '@assets/images/tomato.svg'

export function Navigation() {
   return (
      <nav className={styles.nav}>
         <div className='container'>
            <ul className={styles.nav__list}>
               <li className={styles.nav__item}>
                  <a href="/" className={styles.logo}>
                     <img src={TomatoLogo} className={styles.logo__image} alt="tomato logo" />
                     <h1 className={styles.logo__text}>pomodoro_box</h1>
                  </a>
               </li>
               <li className={styles.nav__item}>
                  <a href="/" className={styles.statistic}>
                     <svg className={styles.statistic__image} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 16H10V0H6V16ZM0 16H4V8H0V16ZM12 5V16H16V5H12Z" fill="#DC3E22" />
                     </svg>


                     <p className={styles.statistic__text}>Статистика</p>
                  </a>
               </li>
            </ul>
         </div>
      </nav>
   );
}