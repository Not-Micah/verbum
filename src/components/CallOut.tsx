import { calloutMessage } from "@/data"
//max-[1668px]:invisible

const CallOut = () => {
  return (
    <section className="grid grid-cols-10 bg-off-white px-8 py-12 rounded-lg shadow-lg 
    max-[1668px]:flex max-[1668px]:flex-col max-[1668px]:items-center max-[1668px]:py-6 max-[800px]:invisible max-[1668px]:px-12 max-[1668px]:mb-24">
      <div className="col-span-7 flex flex-col justify-center gap-4 max-[1668px]:items-center max-[1668px]:pt-7">
        <h3 className="font-semibold text-3xl text-black dynamic-subtitle">{calloutMessage.title}</h3>
        <p className="text-gray-500 font-body pr-5 max-[1668px]:text-center dynamic-text">{calloutMessage.description}</p>
      </div>
      <div className="col-span-3 flex justify-center my-10">
        <a href="" className="px-16 py-6 primary-button hover-scale font-body rounded-full">Submit Verse</a>
      </div>
    </section>
  )
}

export default CallOut