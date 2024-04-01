import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
// import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "235px" }}
            animate={{
              left: ["238px", "8px", "220px", "8px"],
            }}
            transition={{
              ...transition,
              type: "tween",
              repeat: Infinity,
              duration: 10,
            }}
          ></motion.div>
          <span>The best fitness club in Mumbai</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Here we will help you to shape and build your ideal body and live
              up to your life to the fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <Link to="programs" span={true} smooth={true} style={{display:'flex', justifyContent:'center'}}>
            <button className="btn" style={{backgroundColor:"var(--orange)",color:'white'}}>
              Get started
            </button>
          </Link>
          <button className="btn">Learn more</button>
        </div>
      </div>

      <div className="right-h">
        <div
          style={{
            position: "absolute",
            marginTop: "2rem",
            right: "2rem",
            color: "black",
          }}
        >
          <Link to="join-us" span={true} smooth={true}>
            <button className="btn">Join Now</button>
          </Link>
        </div>

        <div className="heart-rate">
          <img src={Heart} alt="Heart-image" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        <img src={hero_image} alt="hero-image" className="hero-image" />
        <motion.img
          initial={{ opacity: 0, right: "11rem" }}
          animate={{
            opacity: [0, 0, 1],
            right: ["11rem", "20rem", "11rem"],
            transition: { duration: 1, repeat: Infinity },
          }}
          src={hero_image_back}
          alt="hero-image-back"
          className="hero-image-back"
        />

        {/* <div className="calories">
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
