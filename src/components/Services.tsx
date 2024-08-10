import { services } from "@/data";

const Services = () => {
  return (
    <section className="max-w-[1100px] mx-24 grid grid-cols-8 gap-12 mb-[10rem] max-xl:flex max-xl:flex-col max-xl:items-center max-xl:mx-8">
      <div className="col-span-2 flex flex-col justify-start items-start gap-y-4 max-xl:items-center">
        <p className="font-body text-dark-purple font-semibold">
          Still wondering?
        </p>
        <h3 className="font-body dynamic-heading font-bold leading-[3rem] text-black max-xl:text-center">
          Why Choose to Use Us?
        </h3>
        <p className="font-body text-gray-500 max-xl:text-center dynamic-label">
          Why use Verbum instead of other online bible tools out there?
        </p>
      </div>
      <div className="col-span-6 flex flex-row justify-center items-center gap-8 max-xl:flex-col max-xl:items-start">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-start shadow-3xl rounded-lg py-9 px-6 gap-6 flex-1 h-[18rem] max-w-[25rem]
        transition-transform duration-[100] ease-linear hover:scale-105 bg-accent-two max-xl:max-w-[40rem]"
          >
            <div className="dynamic-icon p-3 rounded-full bg-soft-purple text-white">
              {service.icon} 
            </div>
            <div className="">
              <h3 className="font-body font-semibold dynamic-text mb-3 text-black">
                {service.title}
              </h3>
              <p className="font-body text-gray-500 dynamic-text">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

{
  /* <section className="flex flex-col justify-center items-center gap-14 max-w-[1500px]">
<h3 className="text-5xl font-semibold">
  <span className="underline">Why</span> use Verbum?
</h3>
<div className="flex flex-row justify-center items-center gap-14 mb-[10rem]">
  {services.map((service) => (
    <div className="flex flex-col justify-end items-start shadow-3xl rounded-lg py-9 px-6 gap-6
    transition-transform duration-[100] ease-linear hover:scale-105">
      <div className="text-2xl p-3 rounded-full bg-secondary text-white">
        {service.icon}
      </div>
      <div className="">
        <h3 className="font-body font-semibold text-xl mb-3">
          {service.title}
        </h3>
        <p className="font-body text-gray-500 text-md">
          {service.description}
        </p>
      </div>
    </div>
  ))}
</div>
</section> */
}
