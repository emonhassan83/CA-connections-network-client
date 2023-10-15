/* eslint-disable react/no-unescaped-entities */
import JoinUsCard from "./JoinUsCard";
import { joinUsData } from "./JoinUsData";
const JoinUs = () => {
  return (
    <div className="my-container text-center mt-[50px] sm:mt-[132px]">
      <h2 className="text-3xl sm:text-5xl md:text-[65px] font-bold leading-[80px]">
        Want to <span className="gradient-text">Join</span> Us?
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl font-semibold sm:mt-4">
        To remain with us, it is essential that you diligently follow the steps
        provided
      </p>

      <div className="mt-6 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {joinUsData &&
          joinUsData.length > 0 &&
          joinUsData.map((data) => (
            <JoinUsCard key={data.serial} data={data} />
          ))}
      </div>
      <p className="mt-8 text-[15px] sm:text-[17px] font-medium">* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className="font-bold">every day</span> until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
    </div>
  );
};

export default JoinUs;
