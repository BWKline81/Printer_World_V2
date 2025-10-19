//Utilities
import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import * as motion from "motion/react-client";

export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  const navigateTo = (dest) => {
    navigate(dest);
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.header}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.logo}
        data-aos="fade-right"
        data-aos-delay="300"
      ></div>
      <div className={styles.navbar}>
        <nav style={{ width: "100%", height: "100%" }}>
          <ul className={styles.nav_links}>
            <li
              className={styles.link}
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <motion.button
                className={styles.pressable}
                onClick={() => navigateTo("/")}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
              >
                <i
                  className="fa-solid fa-house"
                  style={{ opacity: isHovered ? "1" : "0" }}
                ></i>
                <p>Home</p>
              </motion.button>
            </li>
            <li
              className={styles.link}
              data-aos="fade-left"
              data-aos-delay="700"
            >
              <motion.button
                className={styles.pressable}
                onClick={() => navigateTo("/products")}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
              >
                <i
                  className="fa-solid fa-cart-shopping"
                  style={{ opacity: isHovered ? "1" : "0" }}
                ></i>
                <p>Products</p>
              </motion.button>
            </li>
            <li
              className={styles.link}
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <motion.button
                className={styles.pressable}
                onClick={() => navigateTo("/uploads")}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
              >
                <i
                  className="fa-solid fa-upload"
                  style={{ opacity: isHovered ? "1" : "0" }}
                ></i>
                <p>Upload</p>
              </motion.button>
            </li>
            <li
              className={styles.link}
              data-aos="fade-left"
              data-aos-delay="1100"
            >
              <motion.button
                className={styles.pressable}
                onClick={() => navigateTo("/about")}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
              >
                <i
                  className="fa-solid fa-address-card"
                  style={{ opacity: isHovered ? "1" : "0" }}
                ></i>
                <p>About</p>
              </motion.button>
            </li>
            <li
              className={styles.link}
              data-aos="fade-left"
              data-aos-delay="1300"
            >
              <motion.button
                className={styles.pressable}
                onClick={() => navigateTo("/contact")}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
              >
                <i
                  className="fa-solid fa-phone"
                  style={{ opacity: isHovered ? "1" : "0" }}
                ></i>
                <p>Contact</p>
              </motion.button>
            </li>
            <li
              className={styles.link}
              data-aos="fade-left"
              data-aos-delay="1300"
            >
              <motion.button
                className={styles.pressable}
                onClick={() => navigateTo("/contracting")}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
              >
                <i
                  className="fa-solid fa-file"
                  style={{ opacity: isHovered ? "1" : "0" }}
                ></i>
                <p>Contracting</p>
              </motion.button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
