import React, { useEffect } from "react";
import styles from "../styles/ReviewSecCard.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import * as motion from "motion/react-client";

const ReviewsSecCard = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <motion.div
      className={styles.container}
      whileHover={{
        scale: 1.05,
        boxShadow: "10px 10px 0px var(--secondary-color)",
      }}
    >
      <div className={styles.heading_container}>
        <motion.div whileHover={{ scale: 1.05 }} className={styles.icon}>
          {props.name[0]}
        </motion.div>
        <motion.h2
          whileHover={{ scale: 1.05, rotate: 1 }}
          className={styles.header}
        >
          {props.name}
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.05, rotate: 1 }}
          className={styles.rating}
        >
          {props.rating}
        </motion.h2>
      </div>
      <div className={styles.review_wrap}>
        <motion.p
          whileHover={{ scale: 1.025, rotate: 0.5 }}
          className={styles.review}
        >
          {props.review}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ReviewsSecCard;
