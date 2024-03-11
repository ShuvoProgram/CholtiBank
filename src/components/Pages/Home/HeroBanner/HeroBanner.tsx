import ImagePart from "./ImagePart";
import TextAndButtonPart from "./TextAndButtonPart";

const HeroBanner = () => {
  return (
    <div
      className=" bg-gradient-to-r from-yellow-100 dark:from-slate-900"

      // className="py-16 mx-auto max-w-screen-2xl px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-x-20 bg-[url('/homePage/home-loan.png')]  bg-cover bg-center bg-no-repeat"
    >
      <div className="mx-auto max-w-screen-2xl py-20  px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-x-20">
        <div
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="500"
        >
          <TextAndButtonPart />
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="500"
        >
          <ImagePart />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
