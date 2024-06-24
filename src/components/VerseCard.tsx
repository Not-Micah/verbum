import TopicBadge from "./TopicBadge"

interface VerseCardProps {
  location: string,
  verse: string,
  topic: string[] | []
}

const VerseCard: React.FC<VerseCardProps> = ({ location, verse, topic }) => {
  return (
    <div className="px-10 py-8 shadow-md rounded-md bg-white flex flex-col items-start justify-center gap-5
    transition-transform duration-[100] ease-linear hover:scale-[1.015]">
        <h3 className="font-body dynamic-subtitle">{location}</h3>
        <p className="font-body dynamic-text">{verse}</p>
        <div className="flex flex-row flex-wrap justify-start items-center gap-2">
            {topic.map((t, index) => (
                <TopicBadge key={index} data={t} />
            ))}
        </div>
    </div>
  )
}

export default VerseCard