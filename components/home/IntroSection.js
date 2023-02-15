import classes from "./IntroSection.module.css";

const IntroSection = () => {
  return (
    <div className={` ${classes.wrapper}`}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className={classes.introTextWrapper}>
            <div className={classes.introText}>
              Your goals are 
            </div>
            <img src="/images/intro-underline.svg" alt="" />
            <h2>yours to set, but they are ours to accomplish.</h2>
          </div>
          <div className={classes.descWrapper}>
            <p>
            IBS Consulting is a one-stop shop for the ambitious student or young professional.
            </p>

            <p>
            We offer end-to-end support whether your plan is to get into graduate school or land your next job. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntroSection;
