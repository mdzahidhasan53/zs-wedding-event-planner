import Banner from "../Banner/Banner";
import Intro from "../Intro/Intro";
import Satisfaction from "../Satisfaction/Satisfaction";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <Services></Services>
            <Satisfaction></Satisfaction>
        </div>
    );
};

export default Home;