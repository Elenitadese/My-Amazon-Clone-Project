import React from "react";
import styles from "./Footer.module.css";

const footerData = [
  {
    title: "Get to Know Us",
    links: [
      "Careers",
      "Blog",
      "About Amazon",
      "Investor Relations",
      "Amazon Devices",
      "Amazon Science",
    ],
  },
  {
    title: "Make Money with Us",
    links: [
      "Sell products on Amazon",
      "Sell on Amazon Business",
      "Sell apps on Amazon",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an Amazon Hub",
      "› See More Make Money with Us",
    ],
  },
  {
    title: "Amazon Payment Products",
    links: [
      "Amazon Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Amazon Currency Converter",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Amazon and COVID-19",
      "Your Account",
      "Your Orders",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Content and Devices",
      "Help",
    ],
  },
];

const FooterTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // No smooth behavior


  };

  return (
    <div className={styles.footerTop}>
      {/* Make this div clickable */}
      <div className={styles.backToTop} onClick={scrollToTop} style={{ cursor: "pointer" }}>
        Back to top
      </div>

      <div className={styles.footerSections}>
        {footerData.map((section, idx) => (
          <div key={idx} className={styles.footerSection}>
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.footerBottomTop}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
          className={styles.footerLogo}
        />
        <div className={styles.footerOptions}>
          <select><option>English</option></select>
          <select><option>$ USD - U.S. Dollar</option></select>
          <select><option>United States</option></select>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
