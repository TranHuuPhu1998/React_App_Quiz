import * as React from 'react'
import classes from './styles.scss'

export const Header : React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_c}>
        <div className={classes.header_c__logo}>
          <img src="../../img/images.png" alt=""/>
        </div>
        <p className={classes.header_c__text}>LEARNING</p>

      </div>
        <nav className={classes.menu_c}>
        <div className="menu__icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={classes.menu +" "+ classes.menu_main_menu}>
          <li className={classes.menu__item +" "+ classes.current}><a href="/learning">Học tập</a>
          </li>
          <li className={classes.menu__item}><a href="/listLesson">Luyện  tập</a>
          </li>
          <li className={classes.menu__item}><a href="/fights">Thi đấu</a>
          </li>
          <li className={classes.menu__item}><a href="/challenge">Thử thách</a>
          </li>
          <li className={classes.menu__item}><a href="/evaluating">Đánh giá</a>
          </li>
          <li className={classes.menu__item}><a href="/discussion">Thảo luận</a>
          </li>
          <li className={classes.menu__item}><a href="/leaderboard">Xếp hạng</a>
          </li>
        </ul>
        </nav>
    </header>
  )
}