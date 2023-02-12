import classes from "./CounterSection.module.css"
import CountUp from 'react-countup'
import { useInViewport } from 'react-in-viewport'
import { useRef } from "react"

const countData = [
    {
        number: 98,
        desc: "acceptance rate as at Dec 2022",
        frontSymbol:"",
        backSymbol: "%"
    },
    {
        number: 151,
        desc: "client work done (funding + salary)",
        frontSymbol:"",
        backSymbol: "+"
    },
    {
        number: 1500,
        desc: "clients services IBS completed in 2022",
        frontSymbol:"$",
        backSymbol: "M"
    },
    {
        number: 20,
        desc: "countries with clients served",
        frontSymbol:"",
        backSymbol: "+"
    }
]

const CounterSection = () => {
    const myRef = useRef();
  const {
    inViewport,
    enterCount,
    leaveCount,
  } = useInViewport(
    myRef
  );
      
    return <div className={`${classes.wrapper} container`}>
        <div className="d-flex justify-content-center align-items-center" ref={myRef}>
        {inViewport && <div className="d-flex justify-content-between align-items-center ">
            {countData.map((item, i) => <div className={`${classes.countWrapper} ${i === (countData.length - 1)  ? classes.noBorder : undefined}`} key={i}>
                <div className="d-flex justify-content-center align-items-center">{item.frontSymbol && <span className={classes.counter}>{item.frontSymbol}</span>}<CountUp end={item.number} className={classes.counter}/>{item.backSymbol && <span className={classes.counter}>{item.backSymbol}</span>}</div>
                {/* <h2>{item.number}</h2> */}
                <div className={classes.descText}>{item.desc}</div>
            </div>)}
        </div>}
        </div>
        
    </div>
}

export default CounterSection