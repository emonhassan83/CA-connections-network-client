import { AiTwotoneStar } from "react-icons/ai";

const AccountantCard = ({ item }) => {
  return (
    <div className="rounded-xl shadow-lg">
      <img className="h-[244px]" src={item.image} alt="Accountant Image" />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h6>{item?.name}</h6>
          <h6>{item?.price}</h6>
        </div>
        <p>{item?.intro}</p>
        <div className="flex items-center gap-1">
          <AiTwotoneStar />
          <p>
            <span>{item?.rating}</span> ({item?.reviewCount})
          </p>
        </div>
        <button className="btn btn-sm btn-color mt-8 btn-block">View services</button>
      </div>
    </div>
  );
};

export default AccountantCard;
