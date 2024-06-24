import { titleCase } from "@/data"

interface TopicBadgeProps {
  data: string
}

const TopicBadge: React.FC<TopicBadgeProps> = ({ data }) => {
  return (
    <div className="px-4 py-2 bg-soft-blue font-body rounded-lg dynamic-text">
        {titleCase(data)}
    </div>
  )
}

export default TopicBadge