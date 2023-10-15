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
    testimonial,
  } = accountantDetailData;

  return (
    <div className="my-container">
      <div className="lg:flex items-center justify-center gap-[30px]">
        <div className="w-full lg:w-[40%]">
          <h4>{name}</h4>
          <p>{intro}</p>
          <div className="flex items-center gap-1">
            <AiTwotoneStar />
            <p>
              <span>{rating}</span> ({reviewCount})
            </p>
          </div>
          {/* 1ST CARD */}
          <div>
            <div className="flex items-center gap-3">
              <p>{taskComplexity}</p>
              <p>{price}</p>
            </div>
            <div className="flex items-center gap-3">
              <LuCalendarDays />
              <p>{deliveryTime}</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="btn btn-sm btn-color">Request Proposal</button>
              <button className="btn btn-sm btn-color btn-outline">
                Chat with me
              </button>
            </div>
          </div>
          {/* 2ND CARD */}
          <div>
            <h4>What people say?</h4>
            <p>
              I cannot express enough gratitude for the support Micheal has
              provided in managing my personal finances. Their attention to
              detail and deep understanding of financial markets has ensured
              that my investments are in safe hands. I highly recommend their
              services to anyone seeking financial guidance.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[60%]">
          <img src={image} alt="" />
          <h2>About {name}</h2>
          <div className="flex items-center justify-between">
            <div>
              <p>FROM</p>
              <p>{about.from}</p>
            </div>
            <div>
              <p>PARTNER SINCE</p>
              <p>{about.partnerSince}</p>
            </div>
            <div>
              <p>AVERAGE RESPONSE TIME</p>
              <p>{about.averageResponseTime}</p>
            </div>
          </div>

          <div>
            <p>ABOUT</p>
            <p>{about.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p>SERVICES I OFFER</p>
              {about?.services.map((item, index) => (
                <div key={index} className="flex items-center">
                  <BsDot />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div>
              <p>WHY ME?</p>
              {about?.benefits.map((item, index) => (
                <div key={index} className="flex items-center">
                  <BsDot />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[132px]">
        <h4>Recommended for you</h4>
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
