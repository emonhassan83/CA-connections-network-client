import "./Banner.css";
import img1 from "../../../assets/banner/banner-img1.jpg";
import img2 from "../../../assets/banner/banner-img2.jpg";
import img3 from "../../../assets/banner/banner-img3.jpg";
import { useState } from "react";
import { fetchAccountants } from "../../../api/api";
import { Link } from "react-router-dom";

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = async (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    const accountants = await fetchAccountants();
    const matchingAccountants = accountants.filter((accountant) =>
      accountant.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchResults(matchingAccountants);

  };

  const handleSearchClick = () => {
    setSearchInput(""); // Clear the search input
  };

//  console.log(searchResults);
  return (
    <div className="banner-gradient xl:h-[80vh] pb-10 lg:pb-0">
      <div className="md:flex items-center justify-center gap-20 my-container pt-12">
        <div className="w-full md:w-[50%]">
          <h2 className="text-3xl sm:text-5xl md:text-[65px] font-bold sm:leading-[80px] text-center md:text-start leading-10">
            Find <span className="gradient-text">Partners</span> (CAs) available
            online
          </h2>
          <p className="sm:text-lg text-[#616161] md:text-xl mt-4">
            <span className="font-semibold">CONNECT</span> with us where your services are listed and
            visible to a myriad of businesses seeking CA’s for compliance
            support
          </p>
          <div className="flex items-center mt-8 sm:mt-12">
            <input
              className="text-base md:text-lg sm:h-[50px] md:h-[60px] bg-white"
              type="text"
              placeholder="Search by name"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <button
              onClick={handleSearchClick}
              className="btn btn-color text-white -mt-2 -ml-20 sm:h-[50px] md:h-[60px] w-[120px]"
            >
              Search
            </button>
          </div>

            <div className="-mt-4 bg-gray-50 rounded-lg">
            {searchResults  && searchResults.map(item => (
              <Link to={`/accountant/${item.name}`} key={item._id}>
              <div className="selected-accountant">
                <h3 className="font-medium">{item.name}</h3>
              </div>
              </Link>
            ))}
            </div>
        </div>

        <div className="w-full md:w-[50%] grid grid-cols-3 items-center gap-4">
          <img className="rounded-xl pt-40"  src={img1} alt="Banner Image" />
          <img className="rounded-xl -pt-40"  src={img2} alt="Banner Image" />
          <img  className="rounded-xl pt-40" src={img3} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
