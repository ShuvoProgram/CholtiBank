import { featuresData } from "@/constants/featuresData";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="pt-20 mx-auto max-w-screen-2xl px-4 lg:px-16 ">
      <h1 className="text-3xl md:text-4xl  font-black   text-center uppercase">
        Our Latest Technology & <br />{" "}
        <span className="text-primary">Interesting Features</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
