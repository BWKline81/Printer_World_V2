import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import styles from "../styles/ReviewsSec.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useMotionValue, animate } from "motion/react";
import ReviewSecCard from "./ReviewSecCard";

const ReviewsSec = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const FAST_DURATION = 20;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 0.7;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  const reviews = [
    {
      name: "Alice M.",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "“Printer World turned my CAD designs into reality faster than I expected. The quality of the prints was flawless, and the staff helped me choose the right filament for strength and finish. Definitely my go-to 3D print service.”",
    },
    {
      name: "Bob S.",
      rating: "⭐⭐⭐⭐☆",
      review:
        "“I ordered a batch of custom parts for a prototype project. Everything came out great, though one piece needed a slight reprint. They handled it quickly and professionally — excellent customer service!”",
    },
    {
      name: "Ethan J.",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "“As a teacher, I’ve used Printer World for classroom projects, and they always deliver top-notch prints. The kids love seeing their designs come to life. Affordable, reliable, and super educational“",
    },
    {
      name: "George H.",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "“Really impressed by how detailed the prints were! I had a few figurines made for my Etsy shop, and they came out with sharp edges and smooth surfaces. The turnaround time was quick, too.“",
    },
    {
      name: "Charlie L.",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "“Printer World helped me fix a broken appliance part by scanning and reprinting it — it fit like the original! Saved me from buying a whole new machine. Totally worth it.“",
    },
    {
      name: "Fiona G.",
      rating: "⭐⭐⭐⭐☆",
      review:
        "“Their online ordering system was easy to use, and the staff was responsive when I had questions about resin vs. PLA. The final model was strong and well-detailed. Will be ordering again.“",
    },
    {
      name: "Diana K.",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "“Fantastic experience from start to finish. I needed a custom phone mount for my bike, and Printer World nailed the design. Fast service, great communication, and professional results“",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header_wrap} data-aos="fade-down">
        <motion.h2 whileHover={{ scale: 1.05, rotate: 0.5 }}>
          What Our Customers Are Saying
        </motion.h2>
        <div className={styles.line}></div>
        <motion.p whileHover={{ scale: 1.02, rotate: 0.25 }}>
          Don't just take our word for it, hear from our satisfied customers who
          have experienced the quality and service of Printer World!
        </motion.p>
      </div>
      <div className={styles.reviews_container_back}>
        <motion.div
          className={styles.reviews_container}
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewSecCard
              key={index}
              name={review.name}
              rating={review.rating}
              review={review.review}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewsSec;
