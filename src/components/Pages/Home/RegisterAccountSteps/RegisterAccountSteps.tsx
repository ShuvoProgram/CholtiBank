import { registrationStepsData } from "@/constants/registerAccount";
import { Card } from "@nextui-org/react";

const RegisterAccountSteps = () => {
  return (
    <div className="pt-20 mx-auto max-w-screen-2xl px-4 lg:px-16 ">
      <h1 className="text-3xl md:text-4xl  font-black   text-center uppercase">
        Instant Banking Experience
        <br />
        <span className="text-primary">Join Us in a Minute</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
        {registrationStepsData.map((step) => (
          <Card
            key={step.stepNo}
            shadow={"md"}
            radius={"lg"}
            className="p-6 rounded-md  border border-slate-300 hover:border-primary  transition-transform transform hover:scale-105"
          >
            <div
              data-aos="zoom-in-up"
              data-aos-offset="0"
              data-aos-easing="ease-in-out"
              data-aos-duration="1500"
            >
              <div className="flex items-center justify-center mb-4  text-7xl">
                {step.icon}
              </div>
              <div className="text-xl font-bold mb-2 text-center">
                {step.stepName}
              </div>
              <div className="text-sm text-gray-900 dark:text-gray-50 text-center">
                {step.description}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RegisterAccountSteps;
