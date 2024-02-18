import "./ImagePart.css";
import { motion } from "framer-motion";
const img1 =
  "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img2 =
  "https://plus.unsplash.com/premium_photo-1661909492726-8fb686b0fa7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJpa2VyfGVufDB8fDB8fHww";
const ImagePart = () => {
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
      <div className="image-part">
        <motion.div
          className="image-part-1"
          variants={variant1}
          initial="initial"
          whileInView={"active"}
        >
          <img src={img1} height="100%" width="100%" alt="" />
        </motion.div>
        <motion.div
          className="image-part-1"
          variants={variant2}
          initial="initial"
          whileInView={"active"}
        >
          <img src={img2} alt="image" height="100%" width="100%" />
        </motion.div>
      </div>
    </>
  );
};

export default ImagePart;
