import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/ProductOrder.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import * as motion from "motion/react-client";
import { SelectedProduct, SubmitScreen, ProductCost } from "../Pages/Products";

const ProductOrder = () => {
  let { selectedProduct, setSelectedProduct } = useContext(SelectedProduct);
  let { submitScreen, setSubmitScreen } = useContext(SubmitScreen);
  let { productCost, setProductCost } = useContext(ProductCost);

  setProductCost(productCost);

  console.log(productCost);

  const submit = () => {
    console.log("Submitted");
    window.alert(
      "Your order has been submitted! We will deliver to you within the next week. Thank you for your service!"
    );
    setSubmitScreen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <button
        className={styles.back_button}
        onClick={() => setSubmitScreen(false)}
      >
        {" "}
        ←
      </button>
      <div className={styles.container}>
        <div
          className={styles.header_wrap}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <motion.h2 whileHover={{ scale: 1.05, rotate: 0.5 }}>
            Complete Your Order
          </motion.h2>
          <div className={styles.line}></div>
          <motion.p whileHover={{ scale: 1.02, rotate: 0.25 }}>
            Fill out the form below and we will create and deliver your order.
          </motion.p>
        </div>
        <form className={styles.form} onSubmit={submit}>
          <div
            className={styles.input_wrap}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <motion.li
              className={styles.input_label}
              whileHover={{
                scale: 1.1,
                rotate: 1,
              }}
            >
              Name
            </motion.li>
            <motion.input
              type="text"
              className={styles.input}
              required
              whileHover={{
                scale: 1.05,
                border: "3px solid var(--accent-color)",
              }}
              whileFocus={{
                scale: 1.05,
              }}
            />
          </div>

          <div
            className={styles.input_wrap}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <motion.li
              className={styles.input_label}
              whileHover={{
                scale: 1.1,
                rotate: 1,
              }}
            >
              Email Address
            </motion.li>
            <motion.input
              required
              type="email"
              className={styles.input}
              whileHover={{
                scale: 1.05,
                border: "3px solid var(--accent-color)",
              }}
              whileFocus={{
                scale: 1.05,
              }}
            />
          </div>

          <div
            className={styles.input_wrap}
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <motion.li
              className={styles.input_label}
              whileHover={{
                scale: 1.1,
                rotate: 1,
              }}
            >
              Phone Number
            </motion.li>
            <motion.input
              required
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              className={styles.input}
              whileHover={{
                scale: 1.05,
                border: "3px solid var(--accent-color)",
              }}
              whileFocus={{
                scale: 1.05,
              }}
            />
          </div>

          <div
            className={styles.input_wrap}
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <motion.li
              className={styles.input_label}
              whileHover={{
                scale: 1.1,
                rotate: 1,
              }}
            >
              Delivery Address{" "}
            </motion.li>
            <motion.input
              required
              type="text"
              className={styles.input}
              whileHover={{
                scale: 1.05,
                border: "3px solid var(--accent-color)",
              }}
              whileFocus={{
                scale: 1.05,
              }}
            />
          </div>
          <motion.li
            className={styles.input_label}
            style={{ fontWeight: "bold" }}
            whileHover={{
              scale: 1.1,
              rotate: 1,
            }}
          >
            Payment Method
          </motion.li>
          <div
            className={styles.radio_wrap}
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <motion.li
              className={styles.input_label}
              whileHover={{
                scale: 1.1,
                rotate: 1,
              }}
            >
              Visa
            </motion.li>
            <motion.input
              required
              type="radio"
              name="payment"
              value="visa"
              id="visa"
              className={styles.radio_input}
            />
          </div>
          <div
            className={styles.radio_wrap}
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <motion.li
              className={styles.input_label}
              whileHover={{
                scale: 1.1,
                rotate: 1,
              }}
            >
              Mastercard
            </motion.li>
            <motion.input
              required
              type="radio"
              name="payment"
              value="mastercard"
              id="mastercard"
              className={styles.radio_input}
            />
          </div>
          <div
            className={styles.radio_wrap}
            data-aos="fade-left"
            data-aos-delay="700"
          >
            <motion.li
              className={styles.input_label}
              whileHover={{
                scale: 1.1,
                rotate: 1,
              }}
            >
              Paypal
            </motion.li>
            <motion.input
              required
              type="radio"
              name="payment"
              value="paypal"
              id="paypal"
              className={styles.radio_input}
            />
          </div>
          <div
            className={styles.order_info}
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <motion.h2
              whileHover={{
                scale: 1.1,
                rotate: 1,
              }}
            >{`Product: ${selectedProduct}`}</motion.h2>
            <motion.h2
              whileHover={{
                scale: 1.1,
                rotate: 1,
              }}
            >{`Total Cost: $${productCost}`}</motion.h2>
          </div>
          <motion.button className={styles.order_button} type="submit">
            Submit
          </motion.button>
          <motion.button className={styles.reset_button} type="reset">
            Reset
          </motion.button>
        </form>
      </div>
    </>
  );
};

export default ProductOrder;
