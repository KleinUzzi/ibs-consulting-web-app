import DownArrowIcon from "@/icons/DownArrowIcon";
import { useState } from "react";
import InfoContainer from "./components/InfoContainer";
import classes from "./ServicesSecondSection.module.css";

const goalsData = [
  {
    title: "School CVs",
    desc:"We offer expert consulting to help you create a standout school CV. Our personalized guidance and coaching will help you showcase your unique skills and experiences, and create a powerful, effective CV that sets you up for success."
  },
  {
    title: "Recommendation letters",
    desc:"We offer expert consulting to help you create a standout school CV. Our personalized guidance and coaching will help you showcase your unique skills and experiences, and create a powerful, effective CV that sets you up for success."
  },
  {
    title: "Statements of purpose",
    desc:"We offer expert consulting to help you create a standout school CV. Our personalized guidance and coaching will help you showcase your unique skills and experiences, and create a powerful, effective CV that sets you up for success."
  },
  {
    title: "Personal statements",
    desc:"We offer expert consulting to help you create a standout school CV. Our personalized guidance and coaching will help you showcase your unique skills and experiences, and create a powerful, effective CV that sets you up for success."
  },
  {
    title: "Scholarship essays",
    desc:"We offer expert consulting to help you create a standout school CV. Our personalized guidance and coaching will help you showcase your unique skills and experiences, and create a powerful, effective CV that sets you up for success."
  }
]

const clientsSayData = [
  {
    image: "/images/samuel-aboagye.jpeg",
    name: "Samuel Kuma-Aboagye",
    career: "Electrical Power Engineer, British Power",
    desc: "“I initially sought the help of IBS Consulting with one application for an Electrical Engineering masters program in the UK. While I got into my choice university, what I didn’t anticipate was getting into 10 other universities in the UK including Warwick, Sheffield, Strathclyde, and many more. Take my advice - Book these guys if you want to be spoiled for choice” ",
  },
  {
    image: "/images/image-2.png",
    name: "Tracy Oteng-Kusi",
    career: "Civil Engineering Candidate at UC Davis",
    desc: "“I enjoyed working with IBS, they were very friendly and communicated really well. They have a personal touch when you are working with them and they don't treat people like just another client. Despite not having much work experience, they turned my academic experiences into a phenomenal resume and cover letter. Within 24 HOURS of submitting a resume to Kimley-Horn, a top real estate company, I received a call from an interviewer. After my experience, I recommend IBS to people daily and keep up with them for future services I may need”",
  }
]

const ServicesSecondSection = () => {
  const [showDesc, setShowDesc] = useState(false)
  const [indexClicked, setIndexClicked] = useState(0)
  return (
    <div className={`${classes.wrapper}`}>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <h3>Helping you reach your academic goals</h3>
           {goalsData.map((item, i) => (<div className={classes.goalWrapper} key={i}>
              <div className={`d-flex justify-content-between align-items-center ${(indexClicked === i) ? classes.activeGoal : undefined} ${classes.goalContainer}`} onClick={() => {setIndexClicked(i)}} role="button"><h4>{item.title}</h4> <DownArrowIcon color={indexClicked === i && "#00756A"} style={{
            transform: indexClicked === i ? "rotate(180deg)" : "",}}/></div>
              {indexClicked === i && <p>{item.desc}</p>}
            </div>))}
          </div>
        </div>
        <div className={classes.clientsSay}>
          <h3>Our clients say:</h3>
          <div className="row mt-5">
            {clientsSayData.map((item, i) => (<div className="col-6">
            <div className={`d-flex flex-column ${classes.clientCard}`}>
              <div className="d-flex align-items-center mb-3">
              <div
                  className={`${classes.avatarImage} me-3`}
                  style={{
                    background: `url(${item.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}
                ></div>
                <div>
                <h5>{item.name}</h5>
                <h6>{item.career}</h6>
                </div>
              </div>
              <p>{item.desc}</p>
            </div>
            </div>))}
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
};
export default ServicesSecondSection;
