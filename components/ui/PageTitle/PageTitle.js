import classes from "./PageTitle.module.css"

const PageTitle = ({tag, title, centerText}) =>{
    return (
        <div className={`${classes.pageTitle} ${centerText ? classes.centerText : undefined}`}>
            <h6>{tag}</h6>
            <h2>{title}</h2>
        </div>
    )
}

export default PageTitle