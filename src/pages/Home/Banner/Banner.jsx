import "./Banner.css";
import img1 from "../../../assets/banner/banner-img1.jpg";
import img2 from "../../../assets/banner/banner-img2.jpg";
import img3 from "../../../assets/banner/banner-img3.jpg";

const Banner = () => {
  return (
    <div className="banner-gradient">
      <div className="md:flex items-center justify-center gap-16 my-container">
        <div className="w-full md:w-[50%]">
          <h2 className="text-[65px] font-bold leading-[80px]">
            Find <span className="gradient-text">Partners</span> (CAs) available
            online
          </h2>
          <p className="text-[#616161] text-xl mt-4">
            <span>CONNECT</span> with us where your services are listed and
            visible to a myriad of businesses seeking CA’s for compliance
            support
          </p>
          <div className="flex items-center mt-12">
            <input
              className="text-lg h-[60px]"
              type="text"
              placeholder="Search by name"
            />
            <button className="btn bg-primary text-white -mt-2 -ml-20 h-[60px] w-[120px]">Search</button>
          </div>
        </div>
        <div className="w-full md:w-[50%] grid grid-cols-3 items-center gap-4">
          <img src={img1} alt="Banner Image" />
          <img src={img2} alt="Banner Image" />
          <img src={img3} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
