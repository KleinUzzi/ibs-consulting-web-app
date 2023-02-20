import InfoContainer from "./components/InfoContainer";
import classes from "./ServicesSecondSection.module.css";

const ServicesSecondSection = () => {
  return (
    <div className={`${classes.wrapper} container`}>
      <InfoContainer title={"Careers"} image={"suitcase.svg"}>
        <p>
          Landing that dream job is a multi-step process, in which you need to
          show how you add value to the company in each stage.
        </p>

        <p>
          No idea to do that? Our service will help you from start-to-finish of
          the recruiting process to move you in the right direction.
        </p>

        In this area, we offer consulting concerning:
        <ul>
          <li>Resumes</li>
          <li>Job Application Essays</li>
          <li>Cover Letters</li>
          <li>LinkedIn Setup</li>
          <li>Interview Prep</li>
        </ul>
      </InfoContainer>
      <InfoContainer title={"Grad School"} image={"magistrate.svg"}>
        <p>
        We help you achieve your academic goals, getting into your desired universities, or keeping an outstanding performance.
        </p>

        In this area, we offer consulting concerning:
        <ul>
          <li>Document Preparation for Applications</li>
          <li>Academic Mentorship</li>
          <li>Homework Help/Research</li>
          <li>Thesis Assistance</li>
          <li>Grad School Recommendations</li>
          <li>Bibliographies</li>
          <li>APA Referencing</li>
        </ul>
      </InfoContainer>
    </div>
  );
};
export default ServicesSecondSection;
