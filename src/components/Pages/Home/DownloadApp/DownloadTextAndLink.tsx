import Image from "next/image";
import ListOfBenefits from "./ListOfBenefits";
import Link from "next/link";

const DownloadTextAndLink = () => {
  return (
    <div className="space-y-6 ">
      <h1 className="text-3xl md:text-4xl  font-black   uppercase">
        Take <span className="text-primary">Control</span> of Your <br />{" "}
        Finances <br /> Download Our <span className="text-primary">App</span>
        <br />{" "}
      </h1>
      <p className="leading-relaxed  text-slate-900 text-justify max-w-md dark:text-slate-50">
        {
          "Take control of your finances effortlessly – download our app today for a seamless and empowered banking experience!"
        }
      </p>

      <ListOfBenefits />

      <div className="flex flex-wrap items-center gap-5 ">
        <Link href={"#"}>
          <Image
            src={"/homePage/apple-app-store.png"}
            width={160}
            height={80}
            alt="CholtiBank Apple Store"
          />
        </Link>
        <Link href={"#"}>
          <Image
            src={"/homePage/google-play.png"}
            width={190}
            height={110}
            alt="CholtiBank Google Play Store"
          />
        </Link>
      </div>
    </div>
  );
};

export default DownloadTextAndLink;
