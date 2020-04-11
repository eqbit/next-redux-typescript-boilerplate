import React from 'react';
import Home from '@svg/breadcrumbs-home.svg';
import Link from 'next/link';
import { IBreadcrumbs } from '@interfaces';
import './style.scss';
import BreadcrumbItem from './breadcrumb-item';

const constructLink = (breadcrumbs: IBreadcrumbs.Item[], currentElementIndex: number): string => {
  let resultLink = '/';

  for (let i = 0; i <= currentElementIndex; i++) {
    resultLink += `${breadcrumbs[i].path}/`;
  }

  return resultLink.slice(0, -1);
};

const Breadcrumbs: React.FC<IBreadcrumbs.Props> = ({ breadcrumbs }) => {
  return (
    <nav
      className="breadcrumbs"
      aria-label="Breadcrumb"
      vocab="https://schema.org/"
      typeof="BreadcrumbList"
    >
      <ol className="breadcrumbs__list">
        <li
          className="breadcrumbs-item"
          key="breadcrumbs-item-home"
          property="itemListElement"
          typeof="ListItem"
        >
          <Link href="/">
            <a className="breadcrumbs-item__link" property="item" typeof="WebPage">
              <Home/>
            </a>
          </Link>
          <meta property="position" content="1"/>
        </li>
        {breadcrumbs.map((item, index) => (
          <li
            className="breadcrumbs-item"
            key={`breadcrumbs-item-${item.path}`}
            property="itemListElement"
            typeof="ListItem"
          >
            <BreadcrumbItem
              label={item.label}
              index={index}
              total={breadcrumbs.length}
              link={constructLink(breadcrumbs, index)}
            />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
