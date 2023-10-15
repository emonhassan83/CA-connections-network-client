import { AiTwotoneStar } from "react-icons/ai";

const AccountantCard = ({ item }) => {
  return (
    <div className="rounded-xl shadow-lg">
      <img className="md:h-[244px]" src={item.image} alt="Accountant Image" />
      <div className="p-6 sm:p-4">
        <div className="flex items-center justify-between my-2">
          <h6 className="text-xl font-bold">{item?.name}</h6>
          <h6 className="text-xl font-bold">{item?.price}</h6>
        </div>
        <p className="font-medium mb-2">{item?.intro}</p>
        <div className="flex items-center gap-1">
          <AiTwotoneStar className="primary_color"/>
          <p>
            <span className="primary_color font-bold">{item?.rating}</span> ({item?.reviewCount})
          </p>
        </div>
        <button className="btn btn-color mt-8 btn-block">View services</button>
      </div>
    </div>
  );
};

export default AccountantCard;
