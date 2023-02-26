import classes from "./TeamMember.module.css"

const TeamMember = ({name, title, image, children}) =>{
    return(
        <div className={`${classes.wrapper} d-flex justify-content-center align-items-center`} style={{
            background: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 50%",
          }}>
            <div className={classes.imageContainer} ></div>
            <div className={classes.desc}>
                <div className={classes.content}>
                <h3>{name}</h3>
                <h6>{title}</h6>
                {children}
                </div>
            </div>
        </div>
    )
}

export default TeamMember