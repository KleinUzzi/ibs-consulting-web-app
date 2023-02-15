import FacebookIcon from "@/icons/FacebookIcon"
import InstagramIcon from "@/icons/InstagramIcon"
import YouTubeIcon from "@/icons/YouTubeIcon"
import { useState } from "react"
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

const InputField = ({label, required, onChange, value, customClass, type}) => {
    return <div className={`${classes.fieldWrapper} ${customClass}`}>
    <h6>{label}{required && <span>*</span>}</h6>
    <input onChange={(e) => onChange(e)} value={value} type={type}/>
    </div>
}

const Footer = ({marketplacePage}) =>{

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    
    return (
       
        <div className={`container ${classes.wrapper}`}>
            <div className={`${classes.signupWrapper} d-flex flex-column justify-content-center align-items-center`}>
                <h3>Ready to Win? Get Started with IBS.</h3>
                <div className="row"><div className="col-6"><InputField label="First Name" required={true} onChange={(e) => setFirstName(e.target?.value)} value={firstName}  customClass={classes.halfField} type="text"/></div><div className="col-6"><InputField label="Last Name" required={true} onChange={(e) => setLastName(e.target?.value)} value={lastName} customClass={classes.halfField} type="text"/></div></div>
                <InputField label="Email" required={true} onChange={(e) => setEmail(e.target?.value)} value={email} type="email"/>

                <button className={classes.signupButton} type="submit">Sign Up</button>
                
            </div>
        
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