import "./Gallery.css";
import img1 from "../../assets/Gallery/bike1.jpg";
import img2 from "../../assets/Gallery/bike2.jpg";
import img3 from "../../assets/Gallery/bike3.jpg";
import img4 from "../../assets/Gallery/bike4.jpg";
import img5 from "../../assets/Gallery/bike5.jpg";
import img6 from "../../assets/Gallery/bike6.jpg";
import { motion } from "framer-motion";

const Gallery = () => {
  const variant = {
    close: {
      scale: 0.7,
    },

    open: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 20,
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div class="row">
        <motion.div class="column">
          <motion.img
            src={img1}
            alt=""
            variants={variant}
            initial="close"
            whileInView={"open"}
          />

          <motion.img
            src={img2}
            alt=""
            variants={variant}
            initial="close"
            whileInView={"open"}
          />

          <motion.img
            src={img3}
            alt=""
            variants={variant}
            initial="close"
            whileInView={"open"}
          />
        </motion.div>
        <motion.div class="column">
          <motion.img
            src={img6}
            alt=""
            variants={variant}
            initial="close"
            whileInView={"open"}
          />

          <motion.img
            src={img4}
            alt=""
            variants={variant}
            initial="close"
            whileInView={"open"}
          />
        </motion.div>
        <motion.div class="column">
          <motion.img
            src={img3}
            alt=""
            variants={variant}
            initial="close"
            whileInView={"open"}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1673089858109-4e0e25ce4d4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBiaWtlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            variants={variant}
            initial="close"
            whileInView={"open"}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Gallery;
