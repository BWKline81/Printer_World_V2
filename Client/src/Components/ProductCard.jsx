import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/ProductCard.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import * as motion from "motion/react-client";
import { SelectedProduct } from "../Pages/Products";

const ProductCard = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  let { selectedProduct, setSelectedProduct } = useContext(SelectedProduct);

  const handleClick = () => {
    console.log(props.name);
    setSelectedProduct(props.name);
    console.log(selectedProduct);
  };

  return (
    <motion.div
      className={styles.container}
      whileHover={{
        scale: 1.04,
        boxShadow: "10px 10px 0px var(--accent-color)",
      }}
    >
      <motion.div
        className={styles.image}
        style={{ backgroundImage: `url(${props.image})` }}
        whileHover={{ scale: 1.05, filter: "brightness(1)" }}
      ></motion.div>
      <div className={styles.content}>
        <motion.h2
          whileHover={{
            scale: 1.05,
            rotate: 0.5,
          }}
        >
          {props.name}
        </motion.h2>
        <motion.p
          whileHover={{
            scale: 1.05,
            rotate: 0.5,
          }}
        >
          {props.description}
        </motion.p>
        <motion.h3
          whileHover={{
            scale: 1.05,
            rotate: 0.5,
          }}
        >
          ${props.price}
        </motion.h3>
        <motion.button
          className={styles.button}
          onClick={handleClick}
          whileHover={{
            scale: 1.05,
            rotate: 0.5,
            backgroundColor: "var(--secondary-color)",
            color: "var(--accent-color)",
          }}
          whileTap={{
            scale: 0.9,
            backgroundColor: "var(--accent-color-dark)",
            color: "var(--secondary-color)",
            rotate: 0,
            y: 2,
          }}
        >
          View Product
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
