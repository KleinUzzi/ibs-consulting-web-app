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

const goalsData2 = [
  {
    title: "Resumes",
    desc:"We offer expert consulting to help you create a standout school CV. Our personalized guidance and coaching will help you showcase your unique skills and experiences, and create a powerful, effective CV that sets you up for success."
  },
  {
    title: "Job application essays",
    desc:"We offer expert consulting to help you create a standout school CV. Our personalized guidance and coaching will help you showcase your unique skills and experiences, and create a powerful, effective CV that sets you up for success."
  },
  {
    title: "Cover letters",
    desc:"We offer expert consulting to help you create a standout school CV. Our personalized guidance and coaching will help you showcase your unique skills and experiences, and create a powerful, effective CV that sets you up for success."
  },
  {
    title: "LinkedIn setup",
    desc:"We offer expert consulting to help you create a standout school CV. Our personalized guidance and coaching will help you showcase your unique skills and experiences, and create a powerful, effective CV that sets you up for success."
  },
  {
    title: "Interview prep",
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

const clientsSayData2 = [
  {
    image: "/images/princella.jpeg",
    name: "Princella Seripeneh",
    career: "MPH Candidate at the University of Nottingham",
    desc: "“The CEO is an organized and customer-service-oriented perfectionist whom I got to work with personally. She went the extra mile to make sure that I was involved in the process from start to finish. I found her enthusiasm and dedication to IBS Consulting both inspiring and motivating. She truly put her heart and soul into crafting my CV and personal statement and the results? - an admission offer to my school of choice with a scholarship within just 10 days of applying! Subsequently, I was also admitted into three other schools. IBS is the best $ 2,500 investment I have ever made”. ",
  },
  {
    image: "/images/araba.jpeg",
    name: "Araba",
    career: " MBA Candidate and Forte Fellow at George Washington University.",
    desc: "“In September 2020, I began seriously considering Graduate School and that is when I was introduced to IBS Consulting. Initially, I had 5 schools in mind that I wanted to apply to and booked their graduate school service for help with all the applications. I thoroughly enjoyed how involved I was in the entire process from drafting the essays to the final product. With their help, at the end of the application cycle, I had been awarded a $ 100,000 Forte Fellowship to pursue an MBA at George Washington University. They changed the entire trajectory of my academic life”: ",
  }
]

const ServicesContainer = ({background, titleText, textColor, activeColor, cardTitleText, cardSubTitleText, cardDescText, arrayData, arrayData2}) => {
  const [showDesc, setShowDesc] = useState(false)
  const [indexClicked, setIndexClicked] = useState(0)
  return (
    <div className={`${classes.wrapper}`} style={{background: background}}>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <h3 style={{color: textColor}}>{titleText}</h3>
           {arrayData.map((item, i) => (<div className={classes.goalWrapper} style={{borderColor: textColor}} key={i}>
              <div className={`d-flex justify-content-between align-items-center ${(indexClicked === i) ? classes.activeGoal : undefined} ${classes.goalContainer}`} onClick={() => {setIndexClicked(i)}} role="button"><h4 style={{color: (indexClicked === i) ? activeColor : textColor}}>{item.title}</h4> <DownArrowIcon color={indexClicked === i && activeColor ? activeColor : textColor ? textColor : indexClicked === i && "#00756A"} style={{
            transform: indexClicked === i ? "rotate(180deg)" : "",}}/></div>
              {indexClicked === i && <p style={{color: textColor}}>{item.desc}</p>}
            </div>))}
          </div>
        </div>
        <div className={classes.clientsSay}>
          <h3 style={{color: textColor}}>Our clients say:</h3>
          <div className="row mt-5">
            {arrayData2.map((item, i) => (<div className="col-6">
            <div className={`d-flex flex-column ${classes.clientCard}`} style={{background: textColor}}>
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
                <h5 style={{color: cardTitleText}}>{item.name}</h5>
                <h6 style={{color: cardSubTitleText}}>{item.career}</h6>
                </div>
              </div>
              <p style={{color: cardDescText}}>{item.desc}</p>
            </div>
            </div>))}
          </div>
          <div className="d-flex justify-content-center align-items-center mt-5"><button className={classes.getStartedButton} style={{background: textColor, color: background}}>Get started</button></div>
        </div>
      </div>
    </div>
  );
};


const ServicesSecondSection = () => {
  return (
    <>
      <ServicesContainer titleText="Helping you reach academic goals" arrayData={goalsData} arrayData2={clientsSayData}/>
      <ServicesContainer background="#00756A" titleText="Providing expert guidance for career growth" textColor="#FFFFFF" activeColor="#FFA900" cardTitleText="#393939" cardSubTitleText="#8C8B8B" cardDescText="#555353" arrayData={goalsData2} arrayData2={clientsSayData2}/>
    </>
  )
}


export default ServicesSecondSection;
