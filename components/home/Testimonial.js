import classes from "./Testimonial.module.css"
const testimonials = [
    {
        image: "/images/image-1.png",
        name: "Rick Samwell",
        desc: "Thanks to IBS's help, I landed my dream job at a big-tech company. Couldn't recommend them enough!"
    },
    {
        image: "/images/image-2.png",
        name: "Matilda Gomez",
        desc: "IBS is super serious about their work. They take the time to help you craft a compelling application."
    },
    {
        image: "/images/image-3.png",
        name: "Shaun Robinson",
        desc: "They helped me to highlight my strengths and achievements, and to present myself in the best possible light."
    },
    {
        image: "/images/image-4.png",
        name: "José Torres",
        desc: "I was accepted into my top choice graduate program. I highly recommend consulting with IBS. It's a game-chancer!"
    }
]

const Testimonial = () => {
    return <div className={classes.wrapper}>
        <div className="container">
            <h3 className={classes.titleText}>Testimonials</h3>
            <div className="d-flex justify-content-between align-items-center">
            {testimonials.map((item, i) => (<div className={`${classes.testimonialCard} d-flex flex-column justify-content-center align-items-center`} key={i}>
             <div className={classes.avatarImage} style={{background: `url(${item.image})`, backgroundRepeat:"no-repeat", backgroundSize: "cover"}}></div>
             <div className={classes.textWrapper}>
             <h6>{item.name}</h6>
            <div className={classes.descText}>{item.desc}</div>
                </div>   
            
            </div>))}

            </div>
        </div>
    </div>
}

export default Testimonial