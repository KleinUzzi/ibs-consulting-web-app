import PageTitle from "../ui/PageTitle/PageTitle"
import classes from "./ServicesTopSection.module.css"

const ServicesTopSection = () =>{
    return(
        <div className={classes.wrapper}>
            <div className="container">
            <PageTitle tag="DISCOVER OUR" title="Services"/>
            </div>
            <div className={classes.coverImage}>

            </div>
            <div className={`${classes.subText}`}>
                <p>We offer consulting to <span>help you get ready for important moments</span> in your professional and academic journey.</p>
            </div>
        </div>
    )
}

export default ServicesTopSection