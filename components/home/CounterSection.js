import classes from "./CounterSection.module.css"

const countData = [
    {
        number: "98%",
        desc: "acceptance rate as at Dec 2022"
    },
    {
        number: "$151M",
        desc: "client work done (funding + salary)"
    },
    {
        number: "1,500+",
        desc: "clients services IBS completed in 2022"
    },
    {
        number: "20+",
        desc: "countries with clients served"
    }
]

const CounterSection = () => {
    return <div className={`${classes.wrapper} container`}>
        <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-between align-items-center ">
            {countData.map((item, i) => <div className={`${classes.countWrapper} ${i === (countData.length - 1)  ? classes.noBorder : undefined}`} key={i}>
                <h2>{item.number}</h2>
                <div className={classes.descText}>{item.desc}</div>
            </div>)}
        </div>
        </div>
        
    </div>
}

export default CounterSection