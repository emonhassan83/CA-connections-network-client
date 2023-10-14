const JoinUsCard = ({ data }) => {
  return (
    <div className="px-8 py-6 bg-gray-50 rounded-xl">
      <h6>{data?.title}</h6>
      <p>{data?.subtitle}</p>

      <div className="bg-[#F4F4F4] my-6 flex items-center justify-center gap-10 p-4">
        <div>
          <h6>Due date</h6>
          <p>{data?.due_date}</p>
        </div>
        <div>
          <h6>Penalty fees</h6>
          <div>
            {data?.fees?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsCard;
