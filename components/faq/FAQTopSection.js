import { useState } from "react"
import PageTitle from "../ui/PageTitle/PageTitle"
import classes from "./FAQTopSection.module.css"
import { generalQuestions, jobQuestions, schoolQuestions } from "./QuestionsData"

const  menuData = ["General", "Job", "School"]

const FAQTopSection = () =>{
    const [activeTab, setActiveTab] = useState("General")

    
    return(
        <div className={`${classes.wrapper} container`}>
            <div className={`row`}>
                <div className={`col-3 ${classes.sideMenu}`}><PageTitle tag="the answers to" title="IBS FAQ's"/>
                {menuData.map((item, i) => (<div className={`${classes.menuTab} ${item === activeTab ? classes.active : undefined}`} onClick={() => setActiveTab(item)} key={i} role="button">{item}</div>))}</div>
                <div className={`col-9 ${classes.questionWrapper}`}>
                    {activeTab === "General" &&  generalQuestions}
                    {activeTab === "Job" &&  jobQuestions}
                    {activeTab === "School" &&  schoolQuestions}
                </div>
            </div>
        </div>
    )
}

export default FAQTopSection