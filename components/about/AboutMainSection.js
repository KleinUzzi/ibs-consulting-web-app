import TeamMember from "./TeamMember/TeamMember"
import classes from "./AboutMainSection.module.css"
import ArrowIcon from "@/icons/ArrowIcon"
import CountUp from 'react-countup'


const countData = [
    {
        number: 98,
        desc: "As of January, 2023, we have an acceptance rate of 98 percent",
        frontSymbol:"",
        backSymbol: "%"
    },
    {
        number: 800,
        desc: "Our team has worked with over 800 hundred students and professionals across the world",
        frontSymbol:"",
        backSymbol: "+"
    },
    {
        number: 151,
        desc: "Our team has secured 151 Million dollars in client funding and incomes",
        frontSymbol:"$",
        backSymbol: "M"
    }
]

const AboutMainSection = ({}) =>{
    return(
        <div className={`${classes.wrapper}`}>
            <div className={classes.hero}>
                <div className={`${classes.overlay} d-flex justify-content-center align-items-center`}>
                <h3 className={classes.titleText}><span>Hello there,<br /></span>
We are IBS consulting!</h3>
                </div>
            </div>
            <div className={`${classes.company} container row`}>
                <div className="col-4">
                    <div className="d-flex align-items-center">
                    <h3 className="me-3">The IBS story</h3><ArrowIcon />
                    </div>
                </div>
                <div className="col-8">
                    <p>Inspired by Shay is a full-service consulting firm dedicated to helping individuals achieve their career and academic goals. Our expert team of coaches provides personalized guidance and support to help clients build strong foundations for long-term success.</p>
                    <p>At IBS, we believe that everyone has the potential to succeed, and we are committed to unlocking that potential through our premium coaching services. Whether you need assistance with resume writing, interview preparation, or career and academic coaching, our team is here to help.</p>
                    <p>With a focus on personalized attention and tailored solutions, we strive to help each client reach their full potential and achieve their goals. Let us help you build a brighter future, today and tomorrow.</p>
                </div>
            </div>
           <div className={`${classes.banner} d-flex justify-content-center align-items-center`}>
            <div className="container">
            <h4>
                <span>Our mission</span> at IBS is to empower individuals to achieve their career and academic goals through personalized, premium consulting services
                </h4>
            </div>               
           </div>
           <div className={`${classes.counter} container`}>
            <h3>IBS in numbers</h3>
            {countData.map((item, i) => <div className={`${classes.counterContainer} row`} key={i}>
                <div className="col-4"><h3>{item.frontSymbol && <span className={classes.counter}>{item.frontSymbol}</span>}<CountUp end={item.number} className={classes.counter}/>{item.backSymbol && <span className={classes.counter}>{item.backSymbol}</span>}</h3></div> <div className={`${classes.descText} col-8 d-flex align-items-center`}>{item.desc}</div>
            </div>)}
            </div>
        </div>
    )
}

export default AboutMainSection