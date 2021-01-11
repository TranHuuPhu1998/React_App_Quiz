import * as React from 'react'
import './styles.scss'

export const Header : React.FC = () => {
  return (
    <header className="header">
      <div className="header-c">
        <div className="header-c__logo">
          <img src="../../img/images.png" alt=""/>
        </div>
        <p className="header-c__text">LEARNING</p>

      </div>
        <nav className="menu-c">
        <div className="menu__icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="menu menu-main-menu">
          <li className="menu__item current"><a href="/learning">Học tập</a>
          </li>
          <li className="menu__item"><a href="/listLesson">Luyện  tập</a>
          </li>
          <li className="menu__item"><a href="/fights">Thi đấu</a>
          </li>
          <li className="menu__item"><a href="/challenge">Thử thách</a>
          </li>
          <li className="menu__item"><a href="/evaluating">Đánh giá</a>
          </li>
          <li className="menu__item"><a href="/discussion">Thảo luận</a>
          </li>
          <li className="menu__item"><a href="/leaderboard">Xếp hạng</a>
          </li>
        </ul>
        </nav>
    </header>
  )
}