import Image from "next/image";

const ManageMoney = () => {
  return (
    <div className="pt-20 mx-auto max-w-screen-2xl px-4 lg:px-16 flex flex-col space-y-5">
      <h1 className="text-3xl md:text-4xl  font-black   text-center uppercase">
        Our <span className="text-primary">Artificial-Intelligence</span> Helps
        <br />
        You Manage Your Money Efficiently
      </h1>
      <div
        className="flex justify-center items-center max-auto py-10"
        data-aos="zoom-in-up"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-duration="2000"
      >
        <Image
          src="/homePage/manage_money.png"
          width={900}
          height={400}
          alt="Manage money"
          className=""
        />
      </div>
    </div>
  );
};

export default ManageMoney;
