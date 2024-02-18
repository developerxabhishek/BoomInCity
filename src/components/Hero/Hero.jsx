import "./Hero.css";
import video from "../../assets/Video/homevideo2.mp4";
import { Typewriter } from "react-simple-typewriter";
// import { motion } from "framer-motion";

const Hero = () => {
  const variants = {
    initial: {
      x: -400,
      opacity: 0,
      transition: {
        ease: "linear",
        duration: 1,
        delayChildren: 0.5,
      },
    },
    active: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 1,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <>
      <div className="home-video">
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          className="home-videos"
        >
          <source src={video} type="video/mp4" />
        </video>
        {/* <motion.div
          className="hero-text"
          variants={variants}
          initial="initial"
          active="active"
          whileInView={"active"}
        > */}

        <div
          className="hero-text"
          variants={variants}
          initial="initial"
          active="active"
          whileInView={"active"}
        >
          {/* <motion.h1>
            <span style={{ fontWeight: "lighter" }}>WELLCOME </span> <br /> TO{" "}
            <motion.span style={{ color: "#A2FD02" }}>
              <Typewriter
                words={["BOOM IN THE CITY"]}
                loop={Infinity}
                cursor
                cursorStyle="!"
                typeSpeed={100}
                deleteSpeed={90}
                delaySpeed={1000}
              />
            </motion.span>
          </motion.h1> */}

          <h1>
            <span style={{ fontWeight: "lighter" }}>WELLCOME </span> <br /> TO{" "}
            <span style={{ color: "#A2FD02" }}>
              <Typewriter
                words={["BOOM IN THE CITY"]}
                loop={Infinity}
                cursor
                cursorStyle="!"
                typeSpeed={100}
                deleteSpeed={90}
                delaySpeed={1000}
              />
            </span>
          </h1>

          {/* <motion.p>Do it with passion or not at all...</motion.p> */}
          <p>Do it with passion or not at all...</p>
          {/* </motion.div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;

// i have removed animation from this page if you want animtion then you can simply uncomment the above code and replace it with an existing code ...
