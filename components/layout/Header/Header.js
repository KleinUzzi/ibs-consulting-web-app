import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./Header.module.css";

const navList = [
  {
    name: "About Us",
    link: "/about"
  },
  {
    name: "Services",
    link: "/services"
  },
  {
    name: "Success Stories",
    link: "/success"
  },
  {
    name: "Store",
    link: "#"
  },
  {
    name: "Resources",
    link: "#"
  },
  {
    name: "FAQ",
    link: "/faq"
  }
];

const Header = () => {

  const router = useRouter();
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-light fix-top bg-white position-fixed w-100 ${classes.wrapper}`}>
  <div className="container">
    <Link className={`navbar-brand ${classes.brandWrapper}`} href="/"><img src="/images/IBS-logo.png" alt=""/><span className={classes.logoText}>IBS Consulting</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        {navList.map((item, i) => (<li className={`nav-item ${classes.navList}`} key={i}>
          <Link className={`nav-link ${router.pathname === item.link ? classes.active : undefined}`} aria-current="page" href={item.link} >{item.name}</Link>
        </li>))}
        
      </ul>

      <button className={classes.bookButton} type="submit">Book appointment</button>
      
      <button className={classes.joinButton} type="submit">Get started</button>
    </div>
  </div>
</nav>
  );
};

export default Header;
