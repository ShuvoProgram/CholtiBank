import { Button, Card, CardBody, CardHeader, Tooltip } from "@nextui-org/react";

const FeatureCard = ({ feature }: { feature: any }) => {
  const { title, description, icon } = feature;
  return (
    <Tooltip
      showArrow={true}
      content={description}
      classNames={{
        content:
          "max-w-sm bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900",
      }}
    >
      <Card className=" shadow-lg p-2  transition-transform transform hover:scale-105 hover:border-primary">
        <div
          data-aos="zoom-in-up"
          data-aos-offset="0"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          <CardHeader className="flex items-center justify-center text-secondary">
            {icon}
          </CardHeader>
          <CardBody>
            <h3 className="text-xl font-bold mb-2 text-center text-secondary dark:text-slate-100">
              {title}
            </h3>
            {/* <p className="text-gray-600">{description}</p> */}

            {/* <Button variant="light" color="primary" className="text-xs hover:bg-primary dark:text-yellow-500">Learn More...</Button> */}
          </CardBody>
        </div>
      </Card>
    </Tooltip>
  );
};

export default FeatureCard;
