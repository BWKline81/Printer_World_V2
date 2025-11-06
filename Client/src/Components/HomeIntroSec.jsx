import React, { useEffect } from "react";
import styles from "../styles/HomeIntroSec.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import * as motion from "motion/react-client";
import { Link } from "react-router-dom";
//assets
import PreMadeImage from "../assets/Dino-Printing.jpg"; //These are labled wrong
import UploadImage from "../assets/3D-Models.jpg";
import CreateImage from "../assets/Idea-to-Model.jpg";

const HomeIntroSec = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const content = [
    {
      title: "Pre-Made Prints →",
      description:
        "Browse our extensive catalog of pre-made 3D prints, ready to print and deliver to your doorstep.",
      img: UploadImage,
      delay: 200,
      link: "/products",
      cardType: "Accent",
    },
    {
      title: "Upload Your Design →",
      description:
        "Have a 3D model ready? Upload your design files and let us handle the printing with precision and care.",
      img: CreateImage,
      delay: 400,
      link: "/upload",
      cardType: "Dark",
    },
    {
      title: "Custom Modeling →",
      description:
        "Have an idea but no model? Our expert team can design a model from your ideas and bring it to life with our 3D printers.",
      img: PreMadeImage,
      delay: 600,
      link: "/contact",
      cardType: "Dark",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.slash}></div>
      <div className={styles.header_wrap} data-aos="fade-down">
        <motion.h2 whileHover={{ scale: 1.05, rotate: 0.5 }}>
          Print Anything You Can Imagine
        </motion.h2>
        <div className={styles.line}></div>
        <motion.p whileHover={{ scale: 1.02, rotate: 0.25 }}>
          At Printer World, you can choose from a vareity of pre-made 3D prints,
          upload your own files for us to print, or even request that we model
          and print for you!
        </motion.p>
      </div>
      <div className={styles.content_wrap}>
        {content.map((data, index) => (
          <div
            className={styles.card}
            key={index}
            data-aos="fade-right"
            data-aos-delay={data.delay}
          >
            <motion.img
              src={data.img}
              className={styles.card_image}
              alt={data.title}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  data.cardType === "Accent"
                    ? "20px 20px 0 var(--accent-color)"
                    : "20px 20px 0 var(--primary-color)",
              }}
            />
            <div
              className={styles.text}
              data-aos="fade-up"
              data-aos-delay={data.delay}
            >
              <Link to={data.link} className={styles.link}>
                <motion.h3
                  whileHover={{
                    scale: 1.1,
                    rotate: 3,
                    textDecoration: "underline",
                  }}
                  whileTap={{ scale: 0.95, rotate: 0, y: 2 }}
                >
                  {data.title}
                </motion.h3>
              </Link>
              <motion.p whileHover={{ scale: 1.1, rotate: 1 }}>
                {data.description}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeIntroSec;
