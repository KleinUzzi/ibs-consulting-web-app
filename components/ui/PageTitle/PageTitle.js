import classes from "./PageTitle.module.css"

const PageTitle = ({tag, title}) =>{
    return (
        <div className={`${classes.pageTitle}`}>
            <h6>{tag}</h6>
            <h2>{title}</h2>
        </div>
    )
}

export default PageTitle