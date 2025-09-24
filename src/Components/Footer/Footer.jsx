 import React from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerTop}>
        <FooterTop />
      </div>
      <div className={styles.footerBottomSection}>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
