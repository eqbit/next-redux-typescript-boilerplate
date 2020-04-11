import React from 'react';
import { IBreadcrumbs } from '@interfaces';
import Link from 'next/link';

const BreadcrumbItem: React.FC<IBreadcrumbs.BreadcrumbItemProps> = (
  {
    label,
    index,
    total,
    link,
  }
) => {
  if (index < total - 1) {
    return (
      <>
        <Link href={link}>
          <a className="breadcrumbs-item__link" property="item" typeof="WebPage">
            <span property="name">{label}</span>
          </a>
        </Link>
        <meta property="position" content={`${index + 1}`}/>
      </>
    );
  }
  
  return (
    <a className="breadcrumbs-item__link" property="item" typeof="WebPage">
      <span property="name">{label}</span>
      <meta property="position" content={`${index + 1}`}/>
    </a>
  );
};

export default BreadcrumbItem;
