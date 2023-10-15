import AlInOneSection from "../AllInOneSection/AllInOneSection";
import Banner from "../Banner/Banner";
import JoinUs from "../JoinUs/JoinUs";

const Home = () => {
    return (
        <div className="bg-[#FAFBFC]">
            <Banner/>
            <JoinUs/>
            <AlInOneSection/>
        </div>
    );
};

export default Home;