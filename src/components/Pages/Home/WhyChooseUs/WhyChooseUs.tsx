import BestExperience from "./BestExperience";
import ImagePartWhyChooseUs from "./ImagePartWhyChooseUs";

const WhyChooseUs = () => {
  return (
    <div className="pt-20 mx-auto max-w-screen-2xl px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div
        data-aos="fade-right"
       
        data-aos-easing="ease-in-out"
        data-aos-duration="700"
      >
        <ImagePartWhyChooseUs />
      </div>
      <div
        data-aos="fade-left"
       
        data-aos-easing="ease-in-out"
        data-aos-duration="700"
      >
        <BestExperience />
      </div>
    </div>
  );
};

export default WhyChooseUs;
