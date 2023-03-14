import DownArrowIcon from "@/icons/DownArrowIcon"
import PageTitle from "../ui/PageTitle/PageTitle"
import classes from "./ServicesTopSection.module.css"

const ServicesTopSection = () =>{
    return(
        <div className={`${classes.wrapper} container`}>
            <h2>Our services</h2>
            <div className="row">
                <div className="col-8">
                <p>Unlock your potential with IBS consulting’s premium consulting services. Our experts provide personalized solutions for your career and educational needs. Let us empower you to achieve your dreams today.</p>
                </div>
            </div>
            <div className="d-flex align-items-center">
            <button className={classes.bookButton} type="submit">Grad school <DownArrowIcon color="#00756A" height="14.5" width="12" /></button>
            <button className={classes.bookButton} type="submit">Career <DownArrowIcon color="#00756A" height="14.5" width="12" /></button>
            </div>
            
           
        </div>
    )
}

export default ServicesTopSection