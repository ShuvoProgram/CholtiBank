import OutlineButton from "@/components/UI Elements/Button/OutlineButton";
import ProgressingBar from "@/components/UI Elements/ProgressingBar";
import { Button } from "@nextui-org/react";
import { FaTrophy } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
const BestExperience = () => {
  return (
    <div className="space-y-5 ">
      <OutlineButton
        title="Why Choose Us"
        startContent={
          <FaTrophy className="text-secondary text-xl dark:text-yellow-500 " />
        }
      />
      <h1 className="text-3xl md:text-4xl  font-black uppercase ">
        We Commit To Give You The <br />{" "}
        <span className="text-primary">Best Experience</span>
      </h1>
      <p className="leading-relaxed  text-slate-900 text-justify dark:text-slate-50">
        {
          "At Cholti Bank, we are committed to delivering an unparalleled experience. Our choice to prioritize excellence reflects in our innovative solutions, reliability, and customer-centric approach."
        }
      </p>
      <div className="flex flex-col gap-y-2">
        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          <ProgressingBar label={"Customer Services"} value={95} />
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          <ProgressingBar label={"Client Satisfaction"} value={85} />
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          <ProgressingBar label={"Digital Security"} value={90} />
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          <ProgressingBar label={"Innovation"} value={80} />
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          <ProgressingBar label={"Financial Transparency"} value={92} />
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          <ProgressingBar label={"Data Privacy"} value={91} />
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          <ProgressingBar label={"Community Trust"} value={86} />
        </div>
      </div>

      <OutlineButton
        title="Free Consultation"
        endContent={
          <IoMdOpen className="text-secondary text-xl dark:text-yellow-500 " />
        }
      />
    </div>
  );
};

export default BestExperience;
