import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Contracting.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import * as motion from "motion/react-client";
import Image from "../assets/ok.jpg";

const Contracting = () => {
  const FAQquesAns = [
    {
      Ques: "How does the contracting program work?",
      Ans: "By joining the contracting program, you will have access to a selection of orders submitted to Printer World. You will be able to 3D print these orders and ship them to the customer in return for a share of the profit.",
    },
    {
      Ques: "How much can I earn?",
      Ans: "How much you earn depends on how much you print. You will be able to print a certain number of models at a time and will make a certain percentage (typically 30%-40%) of the total amount of sales you earn. ",
    },
    {
      Ques: "Do I have to provide and pay for shipping?",
      Ans: "Yes, our contracters must pay for and provide shipping for their prints. We offer the customer base and orders while you provide the machine, labor, and shipping.",
    },
    {
      Ques: "Why should I become a contracter?",
      Ans: "Being a contracter allows you to make some extra money using a machine you already own. You get the oppourtunity to take extra time practicing your printing skills while making money.",
    },
    {
      Ques: "Why do we do contracting?",
      Ans: "We do contracting for several reasons. For one, contracting allows us to reach a larger area of the country than if we just printed out of our main studio. This also helps us deal with shipipng costs. We also do contracting to get more involved with the community of printers and to help fellow printers make some extra money.",
    },
  ];

  const [FAQopen, setFAQopen] = useState(Array(FAQquesAns.length).fill(false));

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

  const handleFAQ = (index) => {
    FAQopen.forEach((value, i) => (i !== index ? (FAQopen[i] = false) : null));
    const updatedFAQopen = [...FAQopen];
    updatedFAQopen[index] = !updatedFAQopen[index];
    setFAQopen(updatedFAQopen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.background_addonA}></div>
      <div className={styles.background_addonB}></div>
      <div className={styles.Header_container}>
        <Header />
      </div>
      <div className={styles.content_wrap}>
        <div
          className={styles.header_wrap}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <motion.h2 whileHover={{ scale: 1.05, rotate: 0.5 }}>
            Have a 3D Printer at Home?
          </motion.h2>
          <div className={styles.line}></div>
          <motion.p whileHover={{ scale: 1.02, rotate: 0.25 }}>
            Consider joining our contracting program!
          </motion.p>
        </div>
        <div className={styles.content_container}>
          <div className={styles.image_contact_container}>
            <div className={styles.image_desc_container}>
              <motion.div
                className={styles.image}
                style={{ backgroundImage: `url(${Image})` }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "30px 30px 0px var(--accent-color)",
                }}
              ></motion.div>
              <motion.p
                className={styles.description}
                style={{ display: "block" }}
                whileHover={{
                  scale: 1.01,
                  rotate: 0.5,
                }}
              >
                If you have a 3D printer at home, you can join our contracting
                program, where you can print some of our orders in return for a
                share of the profit! Fill out the form on the right with your
                name, email, and a description of your printer, why you want to
                join, etc. We will review your submission and get back to you as
                soon as possible.
              </motion.p>
            </div>
            <div className={styles.contact_container}>
              <motion.form onSubmit={onSubmit} className={styles.form}>
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
                    placeholder="Please provide a description of your printer and why you would be intereseted in the contracting program."
                  ></textarea>
                  <label className={styles.label}>Description</label>
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
                  Submit
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content_wrapB}>
        <div
          className={styles.header_wrap}
          data-aos="fade-down"
          data-aos-delay="100"
          style={{ marginTop: "0px" }}
        >
          <motion.h2 whileHover={{ scale: 1.05, rotate: 0.5 }}>
            FAQs About Our Contracting Program
          </motion.h2>
          <div className={styles.line}></div>
        </div>
        <div className={styles.FAQ_sec}>
          {FAQquesAns.map((item, index) => {
            return (
              <div
                className={styles.FAQ_grouping}
                key={index}
                style={{ height: FAQopen[index] === false ? "10vh" : "25vh" }}
              >
                <motion.div
                  className={styles.FAQ_ques}
                  onClick={() => handleFAQ(index)}
                  style={{
                    borderBottom:
                      FAQopen[index] === true
                        ? "none"
                        : "2px solid var(--secondary-color)",
                    borderBottomLeftRadius:
                      FAQopen[index] === true ? "0px" : "20px",
                    borderBottomRightRadius:
                      FAQopen[index] === true ? "0px" : "20px",
                  }}
                  whileHover={{
                    scale: FAQopen[index] === true ? 1 : 1.05,
                    rotate: FAQopen[index] === true ? 0 : 0.5,
                    borderColor:
                      FAQopen[index] === false
                        ? "var(--accent-color)"
                        : "var(--secondary-color)",
                  }}
                  whileTap={{
                    scale: 0.95,
                    rotate: 0,
                    color: "var(--secondary-color)",
                    y: -2,
                  }}
                >
                  <motion.h2
                    whileHover={{
                      scale: 1.05,
                      rotate: 0.5,
                    }}
                  >
                    {item.Ques}
                  </motion.h2>
                  <i class="fa-solid fa-chevron-down"></i>
                </motion.div>
                <motion.div
                  onClick={() => handleFAQ(index)}
                  className={styles.FAQ_ans}
                  style={{ display: FAQopen[index] === true ? "flex" : "none" }}
                >
                  <motion.p
                    whileHover={{
                      scale: 1.02,
                      rotate: 0.5,
                    }}
                  >
                    {item.Ans}
                  </motion.p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contracting;
