import classes from "./CounterSection.module.css"
import CountUp from 'react-countup'
import { useInViewport } from 'react-in-viewport'
import { useRef } from "react"

const countData = [
    {
        number: 98,
        desc: "Acceptance rate as of Jan 2023",
        frontSymbol:"",
        backSymbol: "%"
    },
    {
        number: 800,
        desc: "People serviced since 2020",
        frontSymbol:"",
        backSymbol: "+"
    },
    {
        number: 151,
        desc: "in client funding & income secured",
        frontSymbol:"$",
        backSymbol: "M"
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
        {inViewport && <div className="d-flex justify-content-between align-items-center w-100">
            {countData.map((item, i) => <div className={`d-flex flex-column align-items-center ${classes.countWrapper} ${i === (countData.length - 1)  ? classes.noBorder : undefined}`} key={i}>
                <div className="d-flex justify-content-center align-items-center">{item.frontSymbol && <span className={classes.counter}>{item.frontSymbol}</span>}<CountUp end={item.number} className={classes.counter}/>{item.backSymbol && <span className={classes.counter}>{item.backSymbol}</span>}</div>
                <div className={classes.descText}>{item.desc}</div>
            </div>)}
        </div>}
        </div>
        
    </div>
}

export default CounterSection