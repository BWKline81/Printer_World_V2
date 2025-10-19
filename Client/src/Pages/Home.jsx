//Utilities
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
// Components
import Header from "../Components/Header";
import HomeImage from "../Components/HomeImage";
import HomeIntroSec from "../Components/HomeIntroSec";
import ReviewsSec from "../Components/ReviewsSec";
// Assets
import Home_Image from "../assets/Home_Image.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
    document.title = "Printer World | Home";
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.Header_container} data-aos="fade-down">
        <Header />
      </div>
      <div
        className={styles.HomeImage_container}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="700"
      >
        <HomeImage image={Home_Image} />
      </div>
      <HomeIntroSec />
      <ReviewsSec />
    </div>
  );
};

export default Home;
