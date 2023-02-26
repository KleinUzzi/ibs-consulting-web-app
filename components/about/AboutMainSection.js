import TeamMember from "./TeamMember/TeamMember"
import classes from "./AboutMainSection.module.css"

const teamData = [
    {
        image: "/images/team-member.png",
        name: "Shelly",
        title: "INTERN",
        desc: <><p>She is a passionate and driven individual who is dedicated to helping people achieve their goals and reach their full potential.</p>

        <p>Shelly has a degree in Psychology, and now is finishing her masters in business.</p>
        
        <p>She's been a part of IBS for all over a way and has an outstanding success record with her clients.</p></>
    }
]

const AboutMainSection = ({}) =>{
    return(
        <div className={`container ${classes.wrapper}`}>
            <div className={classes.company}>
                <h3 className={classes.titleText}>Your dreams are yours to accomplish</h3>
                <p>Whether getting into grad school or landing that dream job, we are here for you.</p>
                <p>WIBS is specialized in consulting services for school and career processes.</p>
            </div>
            <h3 className={classes.titleText}>Meet the Team</h3>
            {teamData.map((item, i) => (<TeamMember name={item.name} title={item.title} image={item.image} key={i}>{item.desc}</TeamMember>))}
        </div>
    )
}

export default AboutMainSection