import React, { useState, useEffect, useMemo, createContext } from "react";
import styles from "../styles/Products.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import ProductPage from "../Components/ProductPage";
import ProductOrder from "../Components/ProductOrder";
import * as motion from "motion/react-client";
import products from "../Utilities/Products";

export let SelectedProduct = createContext();
export let SubmitScreen = createContext();
export let ProductCost = createContext();

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
    document.title = "Printer World | Products";
  }, []);

  let [selectedType, setSelectedType] = useState("all");
  let [selectedPrice, setSelectedPrice] = useState([0, 100000000]);

  let [selectedProduct, setSelectedProduct] = useState(null);
  let [submitScreen, setSubmitScreen] = useState(false);
  let [productCost, setProductCost] = useState(0);

  const selectedProductContext = { selectedProduct, setSelectedProduct };
  const setSubmitScreenContext = { submitScreen, setSubmitScreen };
  const productCostContext = { productCost, setProductCost };

  const typeInputFilter = [
    {
      label: "🔨 Tools",
      value: "tools",
    },
    {
      label: "🎮 Accessories",
      value: "accessories",
    },
    {
      label: "🪑 Decor",
      value: "decor",
    },
    {
      label: "❓ Other",
      value: "other",
    },
    {
      label: "🛒 All",
      value: "all",
    },
  ];

  const priceInputFilter = [
    {
      label: "💲 Under $10",
      value: [0, 9.99],
    },
    {
      label: "💸 $10 - $25",
      value: [10, 25],
    },
    {
      label: "💰 $25.01 - $50",
      value: [25.01, 50],
    },
    {
      label: "💳 Over $50",
      value: [50.01, 1000000],
    },
    {
      label: "🛒 All",
      value: [0, 1000000],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "type") {
      setSelectedType(value);
    } else if (name === "price") {
      const priceArray = value.split(",");
      priceArray.forEach((price, i) => (priceArray[i] = parseFloat(price))); // Convert strings to numbers;
      setSelectedPrice(priceArray);
    }
    console.log(selectedType, selectedPrice);
  };

  return (
    <ProductCost.Provider value={productCostContext}>
      <SubmitScreen.Provider value={setSubmitScreenContext}>
        <SelectedProduct.Provider value={selectedProductContext}>
          <div className={styles.container}>
            <div className={styles.Header_container}>
              <Header />
            </div>
            {selectedProduct === null && submitScreen === false ? (
              <div className={styles.content_wrap}>
                <div
                  className={styles.header_wrap}
                  data-aos="fade-down"
                  data-aos-delay="100"
                >
                  <motion.h2 whileHover={{ scale: 1.05, rotate: 0.5 }}>
                    Pre-Made Prints
                  </motion.h2>
                  <div className={styles.line}></div>
                  <motion.p whileHover={{ scale: 1.02, rotate: 0.25 }}>
                    Check out some of our pre-made prints, ready to print and
                    deliver to your doorstep (note that these prices do not
                    reflect realistic prices).
                  </motion.p>
                </div>
                <div className={styles.content_container}>
                  <motion.div
                    className={styles.sidebar}
                    whileHover={{
                      boxShadow: "10px 10px 0px var(--accent-color)",
                    }}
                  >
                    <motion.h2 whileHover={{ scale: 1.1, rotate: 2 }}>
                      Filter By:
                    </motion.h2>
                    <div className={styles.input_group}>
                      <motion.h3
                        whileHover={{
                          scale: 1.1,
                          rotate: 2,
                        }}
                      >
                        Type
                      </motion.h3>
                      {typeInputFilter.map((item, index) => {
                        return (
                          <div className={styles.input_wrap} key={index}>
                            <motion.label
                              htmlFor={item.label}
                              className={styles.input_label}
                              whileHover={{
                                scale: 1.1,
                                rotate: 2,
                              }}
                            >
                              {item.label}
                            </motion.label>
                            <motion.input
                              type="radio"
                              id={item.label}
                              value={item.value}
                              name="type"
                              className={styles.sidebar_input}
                              onChange={handleInputChange}
                              whileHover={{
                                scale: 1.05,
                                borderColor: "var(--accent-color-dark)",
                              }}
                              whileTap={{
                                scale: 0.98,
                                borderColor: "var(--accent-color",
                                y: 2,
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className={styles.input_group}>
                      <motion.h3
                        whileHover={{
                          scale: 1.1,
                          rotate: 2,
                        }}
                      >
                        Base Price
                      </motion.h3>
                      {priceInputFilter.map((item, index) => {
                        return (
                          <div className={styles.input_wrap} key={index}>
                            <motion.label
                              htmlFor={item.label}
                              className={styles.input_label}
                              whileHover={{
                                scale: 1.1,
                                rotate: 2,
                              }}
                            >
                              {item.label}
                            </motion.label>
                            <motion.input
                              type="radio"
                              id={item.label}
                              value={item.value}
                              name="price"
                              className={styles.sidebar_input}
                              onChange={handleInputChange}
                              whileHover={{
                                scale: 1.05,
                                borderColor: "var(--accent-color-dark)",
                              }}
                              whileTap={{
                                scale: 0.98,
                                borderColor: "var(--accent-color)",
                                y: 2,
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                  <div className={styles.cards_container}>
                    {products.map((item, index) => {
                      if (
                        (selectedType == "all" || item.type == selectedType) &&
                        selectedPrice[0] <= item.price &&
                        selectedPrice[1] >= item.price
                      ) {
                        return (
                          <div
                            className={styles.PC_anim}
                            data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
                            data-aos-delay={index % 2 === 0 ? 300 : 600}
                            key={index}
                          >
                            <ProductCard
                              image={item.image}
                              description={item.desc}
                              name={item.name}
                              price={item.price}
                            />
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                </div>
              </div>
            ) : selectedProduct !== null && submitScreen === false ? (
              products.map((item, index) => {
                if (item.name == selectedProduct) {
                  return (
                    <ProductPage
                      key={index}
                      name={item.name}
                      image={item.image}
                      description={item.desc}
                      fulldesc={item.fulldesc}
                      price={item.price}
                      type={item.type}
                    />
                  );
                }
              })
            ) : selectedProduct !== null && submitScreen === true ? (
              <ProductOrder />
            ) : null}
          </div>
        </SelectedProduct.Provider>
      </SubmitScreen.Provider>
    </ProductCost.Provider>
  );
};

export default Products;
