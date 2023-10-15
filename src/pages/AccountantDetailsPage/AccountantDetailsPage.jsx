import { useLoaderData } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import { BsDot } from "react-icons/bs";
import { fetchAccountants } from "../../api/api";
import { useEffect, useState } from "react";
import AccountantCard from "./AccountantCard";

const AccountantDetailsPage = () => {
  const [accountantData, setAccountantData] = useState([]);
  const accountantDetailData = useLoaderData();

  useEffect(() => {
    fetchAccountants()
      .then((data) => {
        setAccountantData(data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  const filterData = accountantData.filter(
    (item) => item._id !== accountantDetailData._id
  );

  console.log(accountantDetailData);
  console.log(accountantData);
  console.log(filterData);
  const {
    name,
    image,
    intro,
    about,
    deliveryTime,
    price,
    rating,
    reviewCount,
    taskComplexity,
  } = accountantDetailData;

  return (
    <div className="my-container mt-6 md:mt-20 bg-[#FAFBFC]">
      <div className="lg:flex flex-row-reverse items-center justify-center gap-[30px]">

        <div className="px-4 md:px-0 w-full lg:w-[55%]">
          <img className="w-full p-4 rounded-3xl mb-[22px]" src={image} alt="Accountant Image" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">About {name}</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm sm:text-base font-semibold text-gray-500">FROM</p>
              <p className="sm:text-xl uppercase mt-2">{about.from}</p>
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-gray-500">PARTNER SINCE</p>
              <p className="sm:text-xl uppercase mt-2">{about.partnerSince}</p>
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-gray-500">AVERAGE RESPONSE TIME</p>
              <p className="sm:text-xl uppercase mt-2">{about.averageResponseTime}</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm sm:text-base font-semibold text-gray-500">ABOUT</p>
            <p className="sm:text-xl mt-2">{about.description}</p>
          </div>

          <div className="sm:flex items-center justify-between mt-8">
            <div>
              <p className="text-sm sm:text-base font-semibold text-gray-500">SERVICES I OFFER</p>
              {about?.services.map((item, index) => (
                <div key={index} className="flex items-center sm:text-lg mt-2">
                  <BsDot />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 sm:mt-0">
              <p className="font-semibold text-gray-500">WHY ME?</p>
              {about?.benefits.map((item, index) => (
                <div key={index} className="flex items-center sm:text-lg mt-2">
                  <BsDot />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] mt-10 md:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{name}</h2>
          <p className="mt-2 sm:mt-4 sm:text-lg md:text-xl font-medium">{intro}</p>
          <div className="flex items-center gap-1 mt-4 sm:mt-8">
            <AiTwotoneStar className="primary_color"/>
            <p>
              <span className="primary_color font-bold">{rating}</span> ({reviewCount})
            </p>
          </div>
          {/* 1ST CARD */}
          <div className="bg-white rounded-lg shadow-lg mt-8 p-6">
            <div className="flex items-center justify-between">
              <p className="text-lg sm:text-xl">{taskComplexity}</p>
              <p className="text-xl sm:text-2xl font-bold">{price}</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <LuCalendarDays className="primary_color sm:text-xl"/>
              <p className="text-lg sm:text-xl">{deliveryTime}</p>
            </div>
            <div className="flex items-center justify-between mt-[23px]">
              <button className="btn btn-sm btn-color">Request Proposal</button>
              <button className="btn btn-sm btn-outline text-[#0076CE] hover:bg-[#0465ae]">
                Chat with me
              </button>
            </div>
          </div>
          {/* 2ND CARD */}
          <div className="bg-white rounded-lg shadow-lg mt-8 p-6">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold">What people say?</h4>
            <p className="sm:text-lg font-medium mt-4">
              I cannot express enough gratitude for the support Micheal has
              provided in managing my personal finances. Their attention to
              detail and deep understanding of financial markets has ensured
              that my investments are in safe hands. I highly recommend their
              services to anyone seeking financial guidance.
            </p>
          </div>
        </div>
      </div>

      <div className="my-[50px] sm:my-[132px]">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">Recommended for you</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterData?.slice(0,3).map((item) => (
            <AccountantCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountantDetailsPage;
