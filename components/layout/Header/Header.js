import Link from "next/link";
import classes from "./Header.module.css";

const navList = [
  {
    name: "About Us",
    link: "/"
  },
  {
    name: "Services",
    link: "/"
  },
  {
    name: "FAQ",
    link: "/"
  }
];

const Header = () => {

  
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-light fix-top bg-white position-fixed w-100 ${classes.wrapper}`}>
  <div className="container">
    <Link className={`navbar-brand ${classes.brandWrapper}`} href="/"><img src="/images/IBS-logo.png" alt=""/><span className={classes.logoText}>IBS Consulting</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {navList.map((item, i) => (<li className={`nav-item ${classes.navList}`} key={i}>
          <Link className="nav-link active" aria-current="page" href="#" >{item.name}</Link>
        </li>))}
        
      </ul>
      
      <button className={classes.joinButton} type="submit">Join the Waitlist</button>
    </div>
  </div>
</nav>
  );
};

export default Header;
