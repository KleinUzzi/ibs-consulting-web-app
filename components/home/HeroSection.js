import SearchIcon from "@/icons/SearchIcon";
import { TypeAnimation } from "react-type-animation";
import classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={`${classes.wrapper} row`}>
      <div className={`col-6 ${classes.heroImage}`}></div>
      <div className="col-6 d-flex flex-column justify-content-center">
        <h2>We help students and <br />
            young professionals
        </h2>
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={["succeed.", 2000, "earn higher salaries.", 2000, "beat the competition.", 2000]}
          speed={30} // Custom Speed from 1-99 - Default Speed: 40
          style={{
            fontWeight: "600",
            fontSize: "46px",
            lineHeight:"69px",
            textAlign: "left",
            color: "#00756A",
          }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
        {/* <img src="/images/hero-underline.svg" alt="" /> */}

        <button className={classes.discoverButton}>
          Discover Services
        </button>
      </div>
      
    </div>
  );
};

export default HeroSection;
