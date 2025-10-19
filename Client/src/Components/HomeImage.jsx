import React, { useEffect } from "react";
import styles from "../styles/HomeImage.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";

export default function HomeImage(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className={styles.heading_container}>
        <h2>Print Your World</h2>
      </div>
      <div className={styles.overlay}>
        <div className={styles.button_container}>
          <Link to="/products" className={styles.button_container_link}>
            <motion.button
              className={styles.btn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95, y: 2 }}
            >
              View our Products!
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
