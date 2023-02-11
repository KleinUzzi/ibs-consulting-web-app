import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const Layout = ({children}) => {
    const router = useRouter();
    return(
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}

// export default Layout

export default dynamic(() => Promise.resolve(Layout), {
    ssr: false
})