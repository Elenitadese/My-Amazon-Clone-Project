 import React from 'react';
import styles from './Footer.module.css';

const footerLinks = [
  [
    { title: 'Amazon Music', desc: 'Stream millions of songs' },
    { title: 'Amazon Ads', desc: 'Reach customers wherever they spend their time' },
    { title: '6pm', desc: 'Score deals on fashion brands' },
    { title: 'AbeBooks', desc: 'Books, art & collectibles' },
  ],
  [
    { title: 'Amazon Business', desc: 'Everything For Your Business' },
    { title: 'AmazonGlobal', desc: 'Ship Orders Internationally' },
    { title: 'Amazon Web Services', desc: 'Scalable Cloud Computing Services' },
    { title: 'Audible', desc: 'Listen to Books & Original Audio Performances' },
  ],
  [
    { title: 'Box Office Mojo', desc: 'Find Movie Box Office Data' },
    { title: 'Goodreads', desc: 'Book reviews & recommendations' },
    { title: 'IMDb', desc: 'Movies, TV & Celebrities' },
    { title: 'IMDbPro', desc: 'Get Info Entertainment Professionals Need' },
  ],
  [
    { title: 'Kindle Direct Publishing', desc: 'Indie Digital & Print Publishing Made Easy' },
    { title: 'Prime Video Direct', desc: 'Video Distribution Made Easy' },
    { title: 'Shopbop', desc: 'Designer Fashion Brands' },
    { title: 'Woot!', desc: 'Deals and Shenanigans' },
  ],
  [
    { title: 'Zappos', desc: 'Shoes & Clothing' },
    { title: 'Ring', desc: 'Smart Home Security Systems' },
    { title: 'eero WiFi', desc: 'Stream 4K Video in Every Room' },
    { title: 'Blink', desc: 'Smart Security for Every Home' },
  ],
];

const FooterBottom = () => {
  return (
    <div className={styles.footerBottomSection}>
      <div className={styles.columns}>
        {footerLinks.map((group, idx) => (
          <div className={styles.column} key={idx}>
            {group.map((item, index) => (
              <div className={styles.linkItem} key={index}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.desc}>{item.desc}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.legal}>
        <p>Conditions of Use | Privacy Notice | Your Ads Privacy Choices</p>
        <p>© 1996–2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default FooterBottom;
