import classes from "./InfoContainer.module.css"

const InfoContainer = ({title, image, children}) => {
   return(<div className={`${classes.wrapper} container`}>
        <div className="d-flex align-items-center">
            {/* <div className={`${classes.iconWrapper} d-flex flex-column justify-content-center align-items-center`}>
                <img src={`/images/${image}`} alt=""/>
            </div> */}
            <h3>{title}</h3>
        </div>
        <div className={classes.infoWrapper}>
            {children}
        </div>
        <a href="https://www.schedulicity.com/scheduling/ICGE5D2/services?lt_utm_source=lt_share_link"  target="_blank" className={classes.joinButton} type="submit">Learn more</a>
    </div>)
}
export default InfoContainer 