import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import * as motion from "motion/react-client";
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    document.title = "Printer World | Contact";
    window.scrollTo(0, 0);
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b13bbbdf-c774-4542-b740-f3e796f770b4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset();
      window.alert("Message sent successfully!");

      setFormOpen(false);
    } else if (
      (res.message =
        "Sorry, This message has been marked as spam by our server. Contact support if the issue persist.")
    ) {
      console.log("Spam", res);
      event.target.reset();
      window.alert(
        "Your message was marked as spam. If you believe this is an error, please contact us directly at printer.world@example.com"
      );
      setFormOpen(false);
    } else {
      console.log("Error", res);
      event.target.reset();
      window.alert(
        "There was an error sending the message. Please try again. If the issue persists, contact us directly at printer.world@example.com"
      );
    }
  };

  const textAreaRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.Header_container} data-aos="fade-down">
        <Header />
      </div>
      <div className={styles.info_wrap}>
        <div className={styles.background_addonA}></div>
        <div className={styles.background_addonB}></div>
        <div className={styles.background_addonC}></div>
        <div className={styles.background_addonD}></div>
        <div
          className={styles.header_wrap}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <motion.h2 whileHover={{ scale: 1.05, rotate: 0.5 }}>
            Contact Us
          </motion.h2>
          <div className={styles.line}></div>
          <motion.p whileHover={{ scale: 1.02, rotate: 0.25 }}>
            Have any questions or concerns? Feel free to reach out to us using
            the information below.
          </motion.p>
        </div>
        <div className={styles.content}>
          <div className={styles.element}>
            <motion.i
              className="fa-solid fa-phone"
              whileHover={{
                scale: 1.1,
                color: "var(--accent-color)",
                rotate: 10,
              }}
            ></motion.i>
            <motion.h3
              whileHover={{
                scale: 1.05,
                color: "var(--accent-color)",
                rotate: 1,
              }}
            >
              (800) 555-5555
            </motion.h3>
          </div>
          <div className={styles.element}>
            <Link
              to="mailto:printer.world@example.com"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <motion.i
                className="fa-solid fa-envelope"
                whileHover={{
                  scale: 1.1,
                  color: "var(--accent-color)",
                  rotate: 10,
                }}
                whileTap={{
                  scale: 0.9,
                  rotate: 0,
                  color: "var(--secondary-color)",
                  y: -2,
                }}
              ></motion.i>
            </Link>
            <motion.h3
              whileHover={{
                scale: 1.05,
                color: "var(--accent-color)",
                rotate: 1,
                textDecoration: "underline",
              }}
              whileTap={{
                scale: 0.9,
                rotate: 0,
                color: "var(--secondary-color)",
                y: -2,
              }}
            >
              <a href="mailto:printer.world@example.com">
                printer.world@example.com
              </a>
            </motion.h3>
          </div>
        </div>
      </div>
      <div className={styles.contact_form_container}>
        <div
          className={styles.header_wrap}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <motion.h2 whileHover={{ scale: 1.05, rotate: 0.5 }}>
            We'd Love to Hear From You!
          </motion.h2>
          <div className={styles.line}></div>
          <motion.p whileHover={{ scale: 1.02, rotate: 0.25 }}>
            Fill out the form below to send us a message, and we'll get back to
            you as soon as possible!
          </motion.p>
        </div>

        <div
          className={styles.contact_form_wrap}
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <motion.form onSubmit={onSubmit}>
            <div className={styles.input_box}>
              <input
                type="text"
                required
                className={styles.field}
                name="name"
                placeholder="John Doe"
              />
              <label className={styles.label}>Full Name</label>
            </div>
            <div className={styles.input_box}>
              <input
                type="email"
                required
                className={styles.field}
                name="email"
                placeholder="xyz@example.com"
              />
              <label className={styles.label}>Email Address</label>
            </div>
            <div className={styles.input_box}>
              <textarea
                className={styles.field}
                required
                name="message"
                ref={textAreaRef}
                placeholder="Your message..."
              ></textarea>
              <label className={styles.label}>Your Message</label>
            </div>
            <motion.button
              className={styles.button}
              type="submit"
              whileHover={{
                scale: 1.05,
                rotate: 0.5,
                color: "var(--accent-color)",
              }}
              whileTap={{
                scale: 0.95,
                rotate: 0,
                color: "var(--secondary-color)",
                y: -2,
              }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
