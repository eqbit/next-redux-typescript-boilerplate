import React, { useState } from 'react';
import Login from '@svg/login.svg';
import Link from 'next/link';
import Hamburger from '@svg/hamburger.svg';

import './style.scss';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="top-header">
        <div className="container">
          <ul className="top-header__row">
            <li className="top-header__area-select">
              <a>Московская обл.</a>
            </li>
            <li className="top-header__login">
              <button type="button" className="btn btn__login">
                <Login/>
                <span>Вход / Регистрация</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom-header">
        <div className="container">
          <div className="bottom-header__row">
            <Link href="/">
              <a className="bottom-header__logo">
                Home
              </a>
            </Link>

            <div className="header-menu">
              <ul className="header-menu__list visible-md">
                <li className="header-menu__item">
                  <Link href="/detail">
                    <a>Каталог</a>
                  </Link>
                </li>

                <li className="header-menu__item">
                  <Link href="/about">
                    <a>О нас</a>
                  </Link>
                </li>

                <li className="header-menu__item">
                  <Link href="/contacts">
                    <a>Контакты</a>
                  </Link>
                </li>
              </ul>

              <div className="header-menu__hamburger hidden-md">
                <Hamburger onClick={() => setShowMenu(!showMenu)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
