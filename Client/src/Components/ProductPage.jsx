import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/ProductPage.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import * as motion from "motion/react-client";
import { SelectedProduct, SubmitScreen, ProductCost } from "../Pages/Products";

const ProductPage = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    setProductCost(props.price);
  }, []);

  let { selectedProduct, setSelectedProduct } = useContext(SelectedProduct);
  let { submitScreen, setSubmitScreen } = useContext(SubmitScreen);
  let { productCost, setProductCost } = useContext(ProductCost);

  const pgText = props.fulldesc;
  const words = pgText.split(" ");

  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Black",
    "White",
    "Gray",
    "Orange",
    "Purple",
    "Pink",
  ];

  const materials = ["PLA", "ABS", "PETG", "TPU", "Nylon", "PC"];
  const materialCost = [1, 1, 1, 1.25, 2, 1.67];

  let [color, setColor] = useState("None");
  let [material, setMaterial] = useState("None");

  let [matIndex, setMatIndex] = useState(0);

  const handleColorChange = (e) => {
    console.clear();
    try {
      setColor(e.target.value);
      console.log(`Color selected: ${e.target.value}`);
    } catch (e) {
      console.error("Error selecting color: ", e);
      window.alert(
        "There was an error selecting your color. Please try again."
      );
    }
  };

  const handleMaterialChange = (e) => {
    console.clear();
    try {
      setMaterial(e.target.value);
    } catch (e) {
      console.error("Error selecting material: ", e);
      window.alert(
        "There was an error selecting your material. Please try again."
      );
    }
  };

  const submit = () => {
    if (color === "None") {
      window.alert("Please select a color.");
      return;
    }
    if (material === "None") {
      window.alert("Please select a material.");
      return;
    }
    console.log(productCost);
    setSubmitScreen(true);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.image_anim}
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <motion.button
          className={styles.back_button}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.9, rotate: 0, y: 2 }}
          onClick={() => setSelectedProduct(null)}
        >
          ←
        </motion.button>
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: 1,
            boxShadow: "10px 10px 0px var(--accent-color)",
            filter: "brightness(1)",
          }}
          className={styles.image}
          style={{ backgroundImage: `url(${props.image})` }}
        ></motion.div>
        <motion.button
          onClick={submit}
          className={styles.purchase_button}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.9, rotate: 0, y: 2 }}
        >
          Submit Order
        </motion.button>
      </div>
      <div className={styles.content} data-aos="fade-left">
        <div
          className={styles.header_wrap}
          data-aos="fade-down"
          data-aos-delay="200"
          style={{ width: "75%" }}
        >
          <motion.h2 whileHover={{ scale: 1.05, rotate: 0.5 }}>
            {props.name}
          </motion.h2>
          <div className={styles.line}></div>
          <motion.p whileHover={{ scale: 1.02, rotate: 0.25 }}>
            {props.description}
          </motion.p>
        </div>
        <div className={styles.price}>
          <h2>${productCost}</h2>
        </div>
        <motion.label
          htmlFor=""
          className={styles.extra_info_label}
          whileHover={{ scale: 1.05, rotate: 0.5 }}
        >
          Material Preferences: {material}
        </motion.label>
        <div
          className={styles.material_group}
          data-aos="fade-right"
          data-aos-delay="400"
        >
          {materials.map((mat, index) => {
            return (
              <motion.button
                type="button"
                whileHover={{ scale: 1.2, rotate: 2 }}
                whileTap={{
                  scale: 0.9,
                  rotate: 0,
                  backgroundColor: "var(--accent-color-dark)",
                  y: 2,
                }}
                className={styles.material_option}
                key={index}
                onClick={() => {
                  setMatIndex(index);
                  handleMaterialChange({ target: { value: mat } });
                }}
              >
                <div className={styles.mat_highlight}></div>
                <p>{mat}</p>
              </motion.button>
            );
          })}
        </div>
        <motion.label
          htmlFor=""
          className={styles.extra_info_label}
          whileHover={{ scale: 1.05, rotate: 0.5 }}
        >
          Color Preference: {color}
        </motion.label>
        <div
          className={styles.color_group}
          data-aos="fade-left"
          data-aos-delay="500"
        >
          {colors.map((col, index) => {
            return (
              <motion.button
                type="button"
                whileHover={{
                  scale: 1.2,
                  rotate: 2,
                  color: col,
                }}
                whileTap={{
                  scale: 0.9,
                  rotate: 0,
                  backgroundColor: "var(--accent-color-dark)",
                  y: 2,
                }}
                className={styles.color_option}
                key={index}
                onClick={() => handleColorChange({ target: { value: col } })}
              >
                <div
                  className={styles.color_highlight}
                  style={{ backgroundColor: col }}
                ></div>
                <p>{col}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
