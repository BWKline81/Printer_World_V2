import React, { useEffect, useState } from "react";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import * as motion from "motion/react-client";

const Footer = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Upload",
      link: "/uploads",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Contracting",
      link: "/contracting",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.nav_links}>
        {links.map((link, index) => (
          <Link className={styles.nav_link} to={`/${link.link}`} key={index}>
            <motion.p
              whileHover={{
                scale: 1.1,
                rotate: 1,
                color: "var(--accent-color)",
                cursor: "pointer",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              whileTap={{
                scale: 0.95,
                rotate: 0,
                y: 2,
                color: "var(--secondary-color",
              }}
            >
              {link.name}
            </motion.p>
          </Link>
        ))}
      </div>
      <div className={styles.policies_links}>
        <Link to="#" className={styles.policy_link}>
          <motion.p
            whileHover={{
              scale: 1.05,
              rotate: 0.5,
              color: "var(--accent-color)",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            whileTap={{
              scale: 0.95,
              rotate: 0,
              y: 2,
              color: "var(--secondary-color",
            }}
          >
            Terms of Service
          </motion.p>{" "}
        </Link>
        <Link to="#" className={styles.policy_link}>
          <motion.p
            whileHover={{
              scale: 1.05,
              rotate: 0.5,
              color: "var(--accent-color)",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            whileTap={{
              scale: 0.95,
              rotate: 0,
              y: 2,
              color: "var(--secondary-color",
            }}
          >
            Privacy Policy
          </motion.p>{" "}
        </Link>
      </div>
      <div className={styles.copyright}>&copy; 2025 Printer World</div>
    </div>
  );
};

export default Footer;
