import { BsThreeDots } from "react-icons/bs";
import { FaStar, FaUser } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdAddCircle, IoMdEye } from "react-icons/io";

const BoxAnalyysis = () => {
  const data = [
    {
      name: "Total listings",
      icon: <IoMdEye />,
      number: "33",
      percent: "28.4%",
    },
    {
      name: "Booked",
      icon: <FaUser />,
      number: "33",
      percent: "28.4%",
    },
    {
      name: "Available listings",
      icon: <IoMdAddCircle />,
      number: "19",
      percent: "3.1%",
    },
    {
      name: "Reviews",
      icon: <FaStar />,
      number: "39",
      percent: "11.4%",
    },
  ];
  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-5 lg:gap-5">
        {data.map((item) => (
          <div
            key={item.name}
            className="border border-[#343B4F] rounded-[11px] p-5"
          >
            <div className="flex items-ceter justify-between">
              <div className="flex items-center gap-x-1 text-[#AEB9E1]">
                {item.icon}
                <p>{item.name}</p>
              </div>
              <div>
                <BsThreeDots className="text-[#D9E1FA]" />
              </div>
            </div>
            <div className="flex items-center gap-x-2 mt-5">
              <p className="text-2xl lg:text-4xl fw-600">{item.number}</p>
              <div className="flex items-center gap-x-[1px] px-2 py-1 bg-[#05C16833] text-[#14CA74]">
                <p className="fs-300">{item.percent}</p>
                <GoArrowUpRight className="text-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxAnalyysis;
