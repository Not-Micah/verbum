import { titleCase } from "@/data"

const TopicBadge = ({ data } : { data : string }) => {
  return (
    <div className="px-4 py-2 bg-soft-blue font-body rounded-lg">
        {titleCase(data)}
    </div>
  )
}

export default TopicBadge