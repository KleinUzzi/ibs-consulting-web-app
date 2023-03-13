import classes from "./Testimonial.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrowIcon from "@/icons/NextArrowIcon";

const testimonials = [
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
  },
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
  },
  {
    image: "/images/claire.jpeg",
    name: "Marie-Claire Ayonote",
    career: "Student at the University of Toronto.",
    desc: "“I had just started thinking about what I wanted to do after quitting my job at Tim Hortons when I booked IBS Consulting. I shared my end goal of securing another sales job and explained the confusion I faced on exactly how to get there. Not only did the IBS Consultants provide me with a tailored CV and cover letter within 72 hours but I was also subsequently called to interview at Mercedes Benz in Toronto, Royal Canadian Bank, and a few other reputable companies.”",
  },
];

const Testimonial = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", marginTop: "220px",  marginRight: "8vw" }}
            onClick={onClick}
        >
            <NextArrowIcon  right={true}/>
        </div>
    );
}


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", marginTop: "220px",  marginLeft: "62vw"}}
            onClick={onClick}
        >
          <NextArrowIcon />  
        </div>
    );
}



  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    // autoplaySpeed: 3000,
    dotsClass: "button__bar",
    // centerMode: true,
    // arrows: false,
    
  };
  return (
    <div className={classes.wrapper}>
      {/* <div className="container"> */}
        {/* <h3 className={classes.titleText}>Testimonials</h3> */}
        <div className="row">
          <div className="col-3  d-flex flex-column justify-content-center">
          <h3 className={classes.titleText}> What our clients are saying</h3>
          <button className={classes.storiesButton}>
            See our succes stories
          </button>
          </div>
          <div className="col-9">
          <Slider {...settings}>
          {testimonials.map((item, i) => (
            <div className={`${classes.testimonialWrapper} d-flex justify-content-center align-items-center`}  key={i}>
                {/* <div
                  className={classes.avatarImage}
                  style={{
                    background: `url(${item.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: i === testimonials.length - 1 && "40% 6%"
                  }}
                ></div> */}
              <div
                className={`${classes.testimonialCard} d-flex flex-column justify-content-between align-items-center`}
               
              >
                
                <div className={classes.textWrapper}>
                  <div className={classes.descText}>{item.desc}</div>                
                </div>

                <div className="d-flex justify-content-between align-items-center w-100"><div><h6>{item.name}</h6><div className={classes.subtext}>{item.career}</div></div> <div
                  className={classes.avatarImage}
                  style={{
                    background: `url(${item.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: i === testimonials.length - 1 && "40% 6%"
                  }}
                ></div></div>  
              </div>
            </div>
          ))}
        </Slider>
        {/* <div className="d-flex flex-row-reverse pe-4"><div><NextArrowIcon /> <NextArrowIcon  right={true}/></div></div> */}
          </div>
        </div>
       
      {/* </div> */}
    </div>
  );
};

export default Testimonial;
