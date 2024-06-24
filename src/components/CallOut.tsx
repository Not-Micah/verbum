import { calloutMessage } from "@/data"
//max-[1668px]:invisible

const CallOut = () => {
  return (
    <section className=" bg-off-white rounded-lg shadow-lg 
    flex flex-col items-center py-6 px-12 mb-24">
      <div className="flex flex-col justify-center gap-4 items-center pt-7">
        <h3 className="font-semibold text-3xl text-black dynamic-subtitle text-center">{calloutMessage.title}</h3>
        <p className="text-gray-500 font-body pr-5 text-center dynamic-text">{calloutMessage.description}</p>
      </div>
      <div className="flex justify-center my-10">
        <a href="https://forms.gle/9utmWDir7oWUt5Wc7" className="px-16 py-6 max-lg:px-8 max-lg:py-5 max-md:px-6 max-md:py-4 primary-button hover-scale font-body dynamic-text rounded-full">Submit Verse</a>
      </div>
    </section>
  )
}

export default CallOut