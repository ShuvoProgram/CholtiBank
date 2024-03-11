import { Button } from "@nextui-org/react";
import CountNumbers from "./CountNumbers";
import { IoMdOpen } from "react-icons/io";
import OutlineButton from "@/components/UI Elements/Button/OutlineButton";
const TextAndButtonPart = () => {
  return (
    <div className="space-y-3 max-w-md ">
      <h1
        className="text-3xl md:text-4xl font-black uppercase text-primary"
        data-aos="fade-right"
        data-aos-offset="10"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
      >
        {"Bangladesh's"} first digital bank
      </h1>
      <p
        className="leading-relaxed  text-slate-600 dark:text-slate-100 text-justify"
        data-aos="fade-left"
        data-aos-offset="10"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
      >
        {
          "Introducing CholtiBank, Bangladesh's pioneer in digital banking innovation. As the country's first digital bank, we are dedicated to transforming your banking experience into a seamless and efficient journey."
        }
      </p>

      <OutlineButton
        title="Open Account"
        endContent={
          <IoMdOpen className="text-secondary text-xl dark:text-yellow-500 " />
        }
        href="/open-account"
      />
      <CountNumbers />
    </div>
  );
};

export default TextAndButtonPart;
