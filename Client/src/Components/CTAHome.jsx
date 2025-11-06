import React, { useEffect } from "react";
import styles from "../styles/CTAHome.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import * as motion from "motion/react-client";
import { Link } from "react-router-dom";
//Assets
import Mug from "../assets/Mug.jpg";
import Print from "../assets/Print.jpg";

const CTAHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const content = [
    {
      image: Print,
      title: "Pre-Made Prints →",
    },
    {
      image: Mug,
      title: "Upload Your Design →",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.background_addon_A}></div>
      <div className={styles.background_addon_B}></div>
      <div className={styles.header_wrap} data-aos="fade-down">
        <motion.h2 whileHover={{ scale: 1.05, rotate: 0.5 }}>
          Ready to Start Printing?
        </motion.h2>
        <div className={styles.line}></div>
        <motion.p whileHover={{ scale: 1.02, rotate: 0.25 }}>
          Check out some of our pre-made prints or upload your own designs!
        </motion.p>
      </div>
      <div className={styles.content_wrap}>
        {content.map((item, index) => {
          if (item.title == "Pre-Made Prints →") {
            return (
              <div
                className={styles.content_container}
                data-aos="fade-right"
                data-aos-delay="300"
                key={index}
              >
                <motion.img
                  className={styles.content_image}
                  src={item.image}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "20px 20px 0px var(--accent-color)",
                  }}
                ></motion.img>
                <Link to="/products" className={styles.content_link}>
                  <motion.h2
                    className={styles.content_title}
                    whileHover={{
                      scale: 1.02,
                      rotate: 1,
                      color: "var(--accent-color)",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {item.title}
                  </motion.h2>
                </Link>
              </div>
            );
          } else {
            return (
              <div
                className={styles.content_container}
                data-aos="fade-left"
                data-aos-delay="300"
                key={index}
              >
                <Link to="/upload" className={styles.content_link}>
                  <motion.h2
                    className={styles.content_title}
                    whileHover={{
                      scale: 1.02,
                      rotate: 1,
                      color: "var(--accent-color)",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {item.title}
                  </motion.h2>
                </Link>
                <motion.img
                  className={styles.content_image}
                  src={item.image}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "20px 20px 0px var(--accent-color)",
                  }}
                ></motion.img>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CTAHome;
