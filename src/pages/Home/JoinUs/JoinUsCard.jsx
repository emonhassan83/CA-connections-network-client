const JoinUsCard = ({ data }) => {
  return (
    <div className="px-8 py-6 rounded-xl h-[266px] shadow-xl">
      <h6 className="text-xl font-bold">{data?.title}</h6>
      <p className="font-medium text-base mt-[5px]">{data?.subtitle}</p>

      <div className="bg-[#F4F4F4] my-6 flex items-center justify-center gap-10 p-4 rounded-lg">
        <div>
          <h6 className="primary_color text-[18px] font-semibold">Due date</h6>
          <p className="mt-1">{data?.due_date}</p>
        </div>
        <div>
          <h6 className="text-[18px] text-[#FF6666] font-semibold">Penalty fees</h6>
          <div>
            {data?.fees?.map((item, index) => (
              <p className="" key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsCard;
