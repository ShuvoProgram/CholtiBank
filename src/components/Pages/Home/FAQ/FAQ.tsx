import FaqAccordion from "./FaqAccordion";

const FAQ = () => {
  return (
    <div className="pt-20 mx-auto max-w-screen-2xl px-4 lg:px-16 ">
      <h1 className="text-3xl md:text-4xl  font-black   text-center uppercase ">
        {"Let’s Answer Some Of Your"}
        <br />
        <span className="text-primary">Questions</span>
      </h1>
      <div
        className="max-w-5xl mx-auto pt-10"
        data-aos="zoom-in-up"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-duration="2000"
      >
        <FaqAccordion />
      </div>
    </div>
  );
};

export default FAQ;
