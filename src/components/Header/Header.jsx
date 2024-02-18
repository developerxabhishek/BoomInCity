import { clamp } from "framer-motion";
import logoImg from "../../assets/bikelogo.png";
import "./Header.css";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  const [open, setopen] = useState(false);

  const variant1 = {
    initial: {
      x: 100,
      opacity: 0,
      transition: {
        ease: "linear",
        duration: 0.5,
        delayChildren: 0.1,
        staggerChildren: 0.5,
      },
    },
    active: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.1,
        staggerChildren: 0.2,
        type: "spring",
        stiffness: 90,
        damping: 10,
      },
    },
    exit: {
      x: 100,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 40,
        duration: 0.5,
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <>
      <div className="navbar">
        <div className="logoimg">
          <img src={logoImg} alt="logo" />
        </div>

        <div className="navhamburger">
          {!open ? (
            <RiMenu3Fill
              className="hamburgerIcon"
              onClick={() => {
                setopen(true);
              }}
            />
          ) : (
            <IoClose
              className="hamburgerIcon"
              onClick={() => {
                setopen(false);
              }}
            />
          )}
        </div>
      </div>
      {open && (
        <motion.div className="linkContainer">
          <AnimatePresence>
            <motion.ul
              variants={variant1}
              initial="initial"
              whileInView={"active"}
              exit={"exit"}
            >
              <motion.li variants={variant1}>
                <AnchorLink
                  href="#header"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Home
                </AnchorLink>
              </motion.li>
              <motion.li variants={variant1}>
                <AnchorLink
                  href="#services"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Services
                </AnchorLink>
              </motion.li>

              <motion.li variants={variant1}>
                <AnchorLink
                  href="#Gallery"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Gallery
                </AnchorLink>
              </motion.li>
              <motion.li variants={variant1}>
                <AnchorLink
                  href="#Event"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Event
                </AnchorLink>
              </motion.li>
              <motion.li variants={variant1}>
                <AnchorLink
                  href="#Highlights"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Highlights
                </AnchorLink>
              </motion.li>
              <motion.li variants={variant1}>
                <AnchorLink
                  href="#Sponsers"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Sponsers
                </AnchorLink>
              </motion.li>
              <motion.li variants={variant1}>
                <AnchorLink
                  href="#about"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  About
                </AnchorLink>
              </motion.li>
            </motion.ul>
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};

export default Header;
