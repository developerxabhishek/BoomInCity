import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
const Footer = () => {
  const variant1 = {
    initial: {
      y: 200,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 20,
        duration: 1,
      },
    },

    active: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 20,
        duration: 1,
      },
    },
  };

  return (
    <>
      <motion.div className="footer">
        <motion.div className="footer-top">
          <motion.div className="footer-top-left">
            {/* <h1>Relax We got You</h1> */}
            <motion.h1>
              <AnchorLink
                href="#header"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FaArrowUp className="movetotop" />
              </AnchorLink>
            </motion.h1>
          </motion.div>
          <motion.div className="footer-top-right">
            <motion.h1>
              <motion.span
                variants={variant1}
                initial="initial"
                whileInView={"active"}
              >
                Instagram
              </motion.span>{" "}
              <br />{" "}
              <motion.span
                variants={variant1}
                initial="initial"
                whileInView={"active"}
              >
                Facebook
              </motion.span>{" "}
              <br />{" "}
              <motion.span
                variants={variant1}
                initial="initial"
                whileInView={"active"}
              >
                Twitter
              </motion.span>
            </motion.h1>
          </motion.div>
        </motion.div>
        <motion.div className="footer-bottom">
          <motion.div className="footer-bottom-top">
            <motion.div className="footer-bottom-top-left">
              <motion.h1>Ashoka Garden Bhopal M.P.</motion.h1>
            </motion.div>
            <motion.div className="footer-bottom-top-right">
              <motion.h1>bnc74@gmail.com</motion.h1>
              <motion.h1>+91 8567400123</motion.h1>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="footer-part-third">
          {/* <motion.h1
            variants={variant1}
            initial="initial"
            whileInView={"active"}
          >
            BOOM <span style={{ color: "#fff" }}>IN</span> CITY
          </motion.h1> */}

          <h1 variants={variant1} initial="initial" whileInView={"active"}>
            BOOM <span style={{ color: "#fff" }}>IN</span> CITY
          </h1>
        </div>
      </motion.div>
      <hr size="5" color="white" />
      <center></center>
    </>
  );
};

export default Footer;
// ?
