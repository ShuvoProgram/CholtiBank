import CurrencySupport from "@/components/Pages/Home/CurrencySupport/CurrencySupport";
import DownloadApp from "@/components/Pages/Home/DownloadApp/DownloadApp";
import FAQ from "@/components/Pages/Home/FAQ/FAQ";
import Features from "@/components/Pages/Home/Features/Features";
import HeroBanner from "@/components/Pages/Home/HeroBanner/HeroBanner";
import ManageMoney from "@/components/Pages/Home/ManageMoney/ManageMoney";
import RegisterAccountSteps from "@/components/Pages/Home/RegisterAccountSteps/RegisterAccountSteps";
import ThreeCards from "@/components/Pages/Home/ThreeCards/ThreeCards";
import WhyChooseUs from "@/components/Pages/Home/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <WhyChooseUs />
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      >
        <Features />
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      >
        <ManageMoney />
      </div>
      <CurrencySupport />
      <ThreeCards />
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      >
        <RegisterAccountSteps />
      </div>
      <DownloadApp />
      <div
          data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      >
        <FAQ />
      </div>
    </>
  );
};

export default HomePage;
