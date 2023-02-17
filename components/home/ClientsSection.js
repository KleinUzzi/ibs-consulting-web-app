import classes from "./ClientsSection.module.css"

const clientsData = [
    {
        logo: "/images/logo-1.png",
        link: ""
    },
    {
        logo: "/images/logo-2.png",
        link: ""
    },
    {
        logo: "/images/logo-3.png",
        link: ""
    },
    {
        logo: "/images/logo-4.png",
        link: ""
    },
    {
        logo: "/images/logo-5.png",
        link: ""
    },
    {
        logo: "/images/logo-6.png",
        link: ""
    },
    {
        logo: "/images/logo-7.png",
        link: ""
    },
    {
        logo: "/images/logo-8.png",
        link: ""
    },
    {
        logo: "/images/logo-9.png",
        link: ""
    },
    {
        logo: "/images/logo-10.png",
        link: ""
    },
    {
        logo: "/images/logo-11.png",
        link: ""
    },
    {
        logo: "/images/logo-12.png",
        link: ""
    },
    {
        logo: "/images/logo-13.png",
        link: ""
    },
    {
        logo: "/images/logo-14.png",
        link: ""
    },
    {
        logo: "/images/logo-15.png",
        link: ""
    },
    {
        logo: "/images/logo-16.png",
        link: ""
    }
]

const ClientsSection = () => {
    return (
        <div className={`${classes.wrapper}  container`}>
            <h4>Our Clients get into some of the world’s most competitive schools & companies</h4>
            <div className={`row ${classes.logoWrapper} mt-5`}>
            {clientsData.map((item, i) => (<div className="col-3 d-flex justify-content-center align-items-center" key={i} role="button">
                <img src={item.logo} alt=""/>
            </div>))}
            </div>
           
        </div>
    )
}
export default ClientsSection