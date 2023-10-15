import "./Banner.css";
import img1 from "../../../assets/banner/banner-img1.jpg";
import img2 from "../../../assets/banner/banner-img2.jpg";
import img3 from "../../../assets/banner/banner-img3.jpg";
import { useState } from "react";
import axios from "axios";
import { fetchAccountants } from "../../../api/api";
import { Link } from "react-router-dom";

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedAccountant, setSelectedAccountant] = useState(null);

  const handleSearchInputChange = async (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    const accountants = await fetchAccountants();
    const matchingAccountants = accountants.filter((accountant) =>
      accountant.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    // setSearchResults(matchingAccountants);
    setSearchResults(matchingAccountants);

  };

  const handleSearchClick = (accountant) => {
    setSelectedAccountant(accountant);
    setSearchInput(""); // Clear the search input
  };

 console.log(searchResults);
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
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <button
              onClick={handleSearchClick}
              className="btn bg-primary text-white -mt-2 -ml-20 h-[60px] w-[120px]"
            >
              Search
            </button>
          </div>

            <div className="-mt-4 bg-gray-50 p-2 rounded-lg">
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
          <img src={img1} alt="Banner Image" />
          <img src={img2} alt="Banner Image" />
          <img src={img3} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
