import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/NotFound.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import * as motion from "motion/react-client";

const NotFound = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
    document.title = "Printer World | Page Not Found";
  });

  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container} data-aos="fade-up">
      <motion.h1
        whileHover={{
          scale: 1.05,
          rotate: 2,
          color: "var(--accent-color)",
        }}
      >
        404
      </motion.h1>
      <motion.h2
        whileHover={{
          scale: 1.05,
          rotate: 2,
          color: "var(--accent-color)",
        }}
      >
        Page Not Found
      </motion.h2>
      <motion.p
        whileHover={{
          scale: 1.05,
          rotate: 2,
          color: "var(--accent-color)",
        }}
      >
        Sorry, the page you are looking for does not exist.
      </motion.p>
      <motion.button
        className={styles.button}
        onClick={handleReturnHome}
        whileHover={{ scale: 1.05, color: "var(--accent-color)" }}
        whileTap={{ scale: 0.95, color: "var(--secondary-color)", y: -2 }}
      >
        Return to Home
      </motion.button>
    </div>
  );
};

export default NotFound;
