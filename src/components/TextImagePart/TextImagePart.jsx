import "./TextImagePart.css";
import { motion } from "framer-motion";
const img =
  "https://media.istockphoto.com/id/1087107332/photo/biker-woman-with-helmet-and-leather-outfit-portrait.webp?b=1&s=170667a&w=0&k=20&c=_BzkK0Q3IyTqPb5IL1BWWJWKfCrAqkNYVbVKT5_91B8=";
const TextImagePart = () => {
  const variant1 = {
    initial: {
      x: -100,
      opacity: 0,
      transition: {
        ease: "linear",
        duration: 0.8,
      },
    },

    active: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 0.8,
      },
    },
  };
  const variant2 = {
    initial: {
      x: 100,
      opacity: 0,
      transition: {
        ease: "linear",
        duration: 0.8,
      },
    },

    active: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <div className="textimage-part">
        <motion.div
          className="textimage-image"
          variants={variant1}
          initial="initial"
          whileInView={"active"}
        >
          <img src={img} alt="img" height="100%" width="100%" />
        </motion.div>
        <motion.div
          className="textimage-text"
          variants={variant2}
          initial="initial"
          whileInView={"active"}
        >
          <h1>Never settle.</h1>
          <h1>Two wheels, one love!</h1>
          <h1>Grip. Twist. Ride.</h1>

          <h1>Ride big, Ride long, Ride Free.</h1>
          <h1>Two wheels move the soul.</h1>

          <h1>Life is short. So grip it and rip it.</h1>
          <h1>The brand is not important, that face that you ride is.</h1>
        </motion.div>
      </div>
    </>
  );
};

export default TextImagePart;
