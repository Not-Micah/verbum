import { aboutUs } from "@/data";

const AboutUs = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-16 mb-[10rem] mx-24 max-w-[1100px] max-md:gap-10" id="about">
        <div className="flex flex-col gap-10">
            <h3 className="dynamic-heading font-bold font-body text-center">About Us</h3>
            <p className="text-center text-gray-800 dynamic-text max-w-[800px]">Verbum offers many features to ensure you find the verse you&apos;re looking for! Here are some of our key features.</p>
        </div>
        <div className="gap-16 grid grid-cols-2 max-md:grid-cols-1">
            {aboutUs.map((item, index) => (
                <div className="grid grid-cols-8" key={index}>
                    <div className="col-span-1 flex justify-center items-start pt-1 pr-5">
                        <div className="text-2xl text-white bg-dark-purple p-2 rounded-md">
                            {item.icon}
                        </div>
                    </div>
                    <div className="col-span-7 flex flex-col">
                        <h3 className="dynamic-text font-body pb-5 text-gray-900">{item.title}</h3>
                        <p className="dynamic-text font-body text-gray-500">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default AboutUs