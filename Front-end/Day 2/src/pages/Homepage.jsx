import NavBar from "../components/NavBar";
import Slides from "../components/Slide";
import Footer from '../components/Footer'
import NavTabs from "../components/NavTabs";
function HomePage()
{
    return(
        <div >
            <NavBar/>
            <Slides/>

            <div style={{height:'150px'}}>
            </div>
            <NavTabs/>
            <div style={{height:'150px'}}>
            </div>

            <Footer/>
        </div>
    );
}
export default HomePage;