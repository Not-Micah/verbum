import TopicBadge from "./TopicBadge"

const VerseCard = ({ location, verse, topic } : { location : String , verse : String, topic: string[] | [] }) => {
  return (
    <div className="px-10 py-8 shadow-md rounded-md bg-white flex flex-col items-start justify-center gap-5
    transition-transform duration-[100] ease-linear hover:scale-[1.015]">
        <h3 className="font-body text-3xl">{location}</h3>
        <p className="font-body">{verse}</p>
        <div className="flex flex-row flex-wrap justify-start items-center gap-2">
            {topic.map((t, index) => (
                <TopicBadge key={index} data={t} />
            ))}
        </div>
    </div>
  )
}

export default VerseCard