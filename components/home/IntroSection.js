import classes from "./IntroSection.module.css"

const IntroSection = () => {
    return <div className={` ${classes.wrapper}`}>
        <div className="container">
        <div className="d-flex justify-content-center align-items-center">
        <div className={classes.introTextWrapper}>
            <div className={classes.introText}>Your dreams</div>
            <img src="/images/intro-underline.svg" alt=""/>
            <h2>are yours to accomplish</h2>
        </div>
        <div className={classes.descWrapper}>
        <p>Whether getting into grad school or landing that dream job, 
we are here for you.</p>

<p>IBS is specialized in consulting services for school and career processes.</p>
        </div>
        </div>
        </div>
   
        
    </div>
}
export default IntroSection