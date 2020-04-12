import React from 'react';
import './style.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <a
          href="https://eqbit.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          eqbit.tech
        </a>
        © 2020
      </div>
    </footer>
  );
};

export default Footer;
