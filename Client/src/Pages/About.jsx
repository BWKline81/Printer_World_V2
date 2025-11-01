import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { div } from "motion/react-client";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "../Styles/About.module.css";
import * as motion from "motion/react-client";
import Image from "../assets/About.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    document.title = "Printer World | About Us";
    window.scrollTo(0, 0);
  }, []);

  const pgText =
    "Printer World was created in 2025 by its founder Brady Kline, with the goal of giving customers a quick and inexpensive way to create 3D prints of their choosing! Our mission is to make 3D printing accessible to everyone, and we are committed to providing the best customer service possible. We believe that 3D printing has the potential to revolutionize the way we create and manufacture products, and we are excited to be a part of the future of 3D printing.";
  const words = pgText.split(" ");

  return (
    <div className={styles.container}>
      <div className={styles.background_addon}></div>
      <div className={styles.Header_container} data-aos="fade-down">
        <Header />
      </div>
      <div className={styles.content_container} data-aos="fade-up">
        <div
          className={styles.header_wrap}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <motion.h2 whileHover={{ scale: 1.05, rotate: 0.5 }}>
            About Us
          </motion.h2>
          <div className={styles.line}></div>
          <motion.p whileHover={{ scale: 1.02, rotate: 0.25 }}>
            Learn more about who we are and what we do at Printer World.
          </motion.p>
        </div>
        <div className={styles.content}>
          <div
            className={styles.text_container}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <motion.h2
              whileHover={{
                scale: 1.05,
                y: -5,
                color: "var(--accent-color)",
              }}
            >
              Nice to meet you
            </motion.h2>
            <p>
              {words.map((word, index) => {
                return (
                  <motion.span
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      color: "var(--accent-color)",
                      y: -2,
                    }}
                    duration={0.1}
                    className={styles.word_span}
                  >
                    {word}&nbsp;
                  </motion.span>
                );
              })}
            </p>
          </div>
          <motion.div
            className={styles.image_container}
            style={{ backgroundImage: `url(${Image})` }}
            whileHover={{
              scale: 1.03,
            }}
          ></motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
