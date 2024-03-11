import CurrencyCard from "./LogoSection";

const CurrencySupport = () => {
  return (
    <div
      className="pt-20 mx-auto max-w-screen-2xl px-4 lg:px-16 md:grid md:grid-cols-6 space-x-5 space-y-5 items-center"
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div className="md:col-span-2">
        <h1 className="text-3xl md:text-4xl  font-black    uppercase">
          <span className="text-primary">MultiCurrency </span>
          Support
        </h1>
        <p className="leading-relaxed  text-justify text-slate-900 dark:text-slate-50">
          {
            "Unlock the power of global transactions with our cutting-edge MultiCurrency Support. Seamlessly manage and transact in multiple currencies, providing you with unparalleled flexibility and convenience."
          }
        </p>
      </div>
      <div
        className="md:col-span-4"
        data-aos="fade-left"

        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <CurrencyCard />
      </div>
    </div>
  );
};

export default CurrencySupport;
