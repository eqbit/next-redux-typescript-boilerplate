import React from 'react';
import FooterAge from '@svg/footer-age.svg';
import Link from 'next/link';

import './style.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-3 col-lg-3 col-md-4">
            <div className="footer-info">
              <div className="footer-info__copy">
                eqbit.tech © 2020
              </div>

              <div className="footer-info__age">
                <FooterAge/>
                <span>для всех возрастов</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-3 col-lg-3 col-md-5">
            <div className="footer-menu">
              <ul className="footer-menu__list">
                <li className="footer-menu__item">
                  <Link href="/catalog">
                    <a>Каталог</a>
                  </Link>
                </li>

                <li className="footer-menu__item">
                  <Link href="/about">
                    <a>О нас</a>
                  </Link>
                </li>

                <li className="footer-menu__item">
                  <Link href="/contacts">
                    <a>Каталог</a>
                  </Link>
                </li>

                <li className="footer-menu__item">
                  <Link href="/for-partners">
                    <a>Информация для партнеров</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-xl-3 col-lg-3 visible-lg"/>

          <div className="col-xl-3 col-lg-3  col-md-3">
            <div className="footer-contacts">
              <div className="footer-contacts__title">Служба поддержки</div>
              <a href="tel:8 800 123 12 34" className="footer-contacts__phone">8 800 123 12 34</a>
              <a href="mailto:contact@out-of-school.ru" className="footer-contacts__email">contact@eqbit.tech</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
