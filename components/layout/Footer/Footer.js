import FacebookIcon from "@/icons/FacebookIcon"
import InstagramIcon from "@/icons/InstagramIcon"
import YouTubeIcon from "@/icons/YouTubeIcon"
import classes from "./Footer.module.css"

const footerData = [
    {
        title: "Products",
        links: [{name:"Charting", link:"/products"}, {name:"Tracking", link: "/products"}, {name: "Copier", link: "/products"}]
    },
    {
        title: "Learn",
        links: [{name: "Essentials", link: "#"}, {name:"Academy", link: "#"}]
    },
    {
        title: "About Us",
        links: [{name: "Traders Eco", link: "/about/traders-eco"}, {name:"Refer Friends", link:"/about/affiliate" }]
    }
]

const Footer = ({marketplacePage}) =>{
    
    return (
       
        <div className={`container ${classes.wrapper}`}>
        
        <div className={`${classes.bottomFooter} d-flex justify-content-between align-items-center`}>
            <div className={classes.copyRightText}>© 2023, IBS Consulting Inc. All Rights Reserved.</div>
            <div>
                <InstagramIcon />
                <FacebookIcon />
                <YouTubeIcon />
            </div>
        </div>
        </div>
    )
}

export default Footer