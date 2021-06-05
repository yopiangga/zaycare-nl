
import Main from "../component/home/Main";
import Category from "../component/home/Category";
import Feature from "../component/home/Feature";
import Location from "../component/home/Location";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

export default function Home() {
    return(
        <div className="home-page">
            <Navbar />
            <Main />
            <Category />
            <Location />
            <Feature />
            <Footer />
        </div>
    )
}