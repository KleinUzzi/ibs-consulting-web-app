import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={`${classes.wrapper}  d-flex flex-column justify-content-center align-items-center`}>
      
        <div className="container">
        <div
        className={`${classes.approachCard} `}
      >
          <h2>Our Approach</h2>
          <p>
            Our approach is simple; <span>client-first</span> and <span>client-focused</span>. IBS not
            only makes the process easier, but we make you, the applicant,
            better as well. From the onset of our service delivery, we
            prioritize the needs of our clients and ensure that they feel seen
            and actively involved in the process. Once a service has been
            decided on, a consultant walks the client through pricing as well as
            collects certain key pieces of information that will be needed,
            after which an invoice is issued. A deposit is expected to be made
            within 72 hours of booking. Subsequent to payment, a turnover time
            is communicated to the client and the Magic begins.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
