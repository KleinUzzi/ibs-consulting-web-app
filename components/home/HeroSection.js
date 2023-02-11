import { TypeAnimation } from "react-type-animation"
import classes from "./HeroSection.module.css"

const HeroSection = () => {
 return <div className={`${classes.wrapper}  d-flex flex-column justify-content-center align-items-center`}>
    <h2>We help you</h2>
    <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'get ready to',
    2000,
    'get there',
    2000,
    ]}
    speed={30} // Custom Speed from 1-99 - Default Speed: 40
    style={{ fontWeight: "700", fontSize: "71px", textAlign: "center", color: "#00756A" }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />
    <img src="/images/hero-underline.svg" alt=""/>

    <button className={classes.discoverButton}>Discover our Services</button>
 </div>
}

export default HeroSection