import PageTitle from "../ui/PageTitle/PageTitle"
import classes from "./ServicesTopSection.module.css"

const ServicesTopSection = () =>{
    return(
        <div className={classes.wrapper}>
           
            <div className={`${classes.coverImage} d-flex justify-content-center align-items-center`}>
            {/* <div className="container"> */}
            <PageTitle tag="DISCOVER OUR" title="Services" centerText={true}/>
            {/* </div> */}
            </div>
            {/* <div className={`${classes.subText}`}>
                <p>We offer consulting to <span>help you get ready for important moments</span> in your professional and academic journey.</p>
            </div> */}
        </div>
    )
}

export default ServicesTopSection