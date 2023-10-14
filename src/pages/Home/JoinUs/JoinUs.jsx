/* eslint-disable react/no-unescaped-entities */
import JoinUsCard from "./JoinUsCard";
import { joinUsData } from "./JoinUsData";
const JoinUs = () => {
  return (
    <div className="my-container text-center mt-[132px]">
      <h2 className="text-[65px] font-bold leading-[80px]">
        Want to <span className="gradient-text">Join</span> Us?
      </h2>
      <p className="text-lg">
        To remain with us, it is essential that you diligently follow the steps
        provided
      </p>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {joinUsData &&
          joinUsData.length > 0 &&
          joinUsData.map((data) => (
            <JoinUsCard key={data.serial} data={data} />
          ))}
      </div>
      <p className="mt-8">* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every day until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
    </div>
  );
};

export default JoinUs;
