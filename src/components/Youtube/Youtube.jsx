import "./Youtube.css";
import { motion } from "framer-motion";
const Youtube = () => {
  const variants = {
    initial: {
      y: 90,
      opacity: 0,
      transition: {
        ease: "linear",
        duration: 0.8,
      },
    },

    active: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <motion.div className="youtube-container">
        <motion.iframe
          //   width="100%"
          //   height="100%"
          variants={variants}
          initial="initial"
          whileInView={"active"}
          src="https://www.youtube.com/embed/XiAqmlIEFi0?si=sivRfwcP3SgkpJUD"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></motion.iframe>
      </motion.div>
    </>
  );
};

export default Youtube;
