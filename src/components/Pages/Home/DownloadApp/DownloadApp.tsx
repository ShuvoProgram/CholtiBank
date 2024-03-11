import Image from "next/image";
import DownloadTextAndLink from "./DownloadTextAndLink";

const DownloadApp = () => {
  return (
    <div className="pt-20 mx-auto max-w-screen-2xl px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-20">
      <div
        data-aos="zoom-in-right"
       
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <DownloadTextAndLink />
      </div>
      <div
        className=""
        data-aos="zoom-in-left"
       
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <Image
          src={"/homePage/downloadApp.png"}
          width={600}
          height={600}
          alt="Download CholtiBank App"
        />
      </div>
    </div>
  );
};

export default DownloadApp;
