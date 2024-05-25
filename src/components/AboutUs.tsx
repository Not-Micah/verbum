import { aboutUs } from "@/data";

const AboutUs = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-16 mb-[10rem] mx-8 max-w-[1100px] max-md:gap-10 
    max-xl:px-32 max-lg:px-12 max-md:px-3" id="about">
        <h3 className="dynamic-heading font-bold font-body text-center max-w-[500px]">Some of our <span className="text-soft-purple underline">key features</span> and details!</h3>
        <div className="gap-16 grid grid-cols-2 max-md:grid-cols-1">
            {aboutUs.map((item, index) => (
                <div className="grid grid-cols-8 px-4" key={index}>
                    <div className="col-span-1 flex justify-center items-start pt-1 pr-5">
                        <div className="dynamic-icon text-white bg-dark-purple p-2 rounded-md
                        shadow-black/15 shadow-lg">
                            {item.icon}
                        </div>
                    </div>
                    <div className="col-span-7 flex flex-col px-4">
                        <h3 className="dynamic-text font-body pb-5 text-gray-900 font-semibold">{item.title}</h3>
                        <p className="dynamic-text font-body text-gray-500">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default AboutUs