"use client";

import CountUp from "react-countup";
const CountNumbers = () => {
  return (
    <div
      className="flex items-center gap-x-5"
      data-aos="fade-right"
      data-aos-offset="0"
      data-aos-easing="ease-in-out"
      data-aos-duration="1500"
    >
      {/* single count */}
      <div className="flex flex-col">
        <div className="font-black text-secondary dark:text-slate-100  text-2xl md:text-4xl flex items-center ">
          <CountUp end={17} />
          <p>M</p>
          <p className="text-3xl md:text-5xl mb-2 ml-[-2px]">+</p>
        </div>
        <p className="leading-relaxed text-slate-700 text-xs md:text-base dark:text-slate-300  font-semibold mt-[-8px]">
          Customers
        </p>
      </div>
      {/* single count */}
      <div className="flex flex-col">
        <div className="font-black text-secondary dark:text-slate-100  text-2xl md:text-4xl flex items-center ">
          <p>$</p>
          <CountUp end={134} />
          <p>B</p>
          <p className="text-3xl md:text-5xl mb-2 ml-[-2px]">+</p>
        </div>
        <p className="leading-relaxed text-slate-700 text-xs md:text-base dark:text-slate-300  font-semibold mt-[-8px]">
          Loans Given
        </p>
      </div>
      {/* single count */}
      <div className="flex flex-col">
        <div className="font-black text-secondary dark:text-slate-100  text-2xl md:text-4xl flex items-center ">
          <CountUp end={12} />
          <p>M</p>
          <p className="text-3xl md:text-5xl mb-2 ml-[-2px]">+</p>
        </div>
        <p className="leading-relaxed text-slate-700 text-xs md:text-base dark:text-slate-300  font-semibold mt-[-8px]">
          Cards Approved
        </p>
      </div>
    </div>
  );
};

export default CountNumbers;
