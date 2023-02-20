import classes from "./Question.module.css"

const Question = ({title, children}) =>{
    return(
        <div className={classes.wrapper}>
            <h3>{title}</h3>
            {children}
        </div>
    )
}
export default Question