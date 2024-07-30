import { titleCase } from "@/data"
import { twMerge } from "tailwind-merge";

interface TopicBadgeProps {
  data: string;
  className?: string;
}

const TopicBadge: React.FC<TopicBadgeProps> = ({ data, className }) => {
  return (
    <div className={twMerge("px-4 py-2 bg-soft-blue font-body rounded-lg dynamic-text ", className)}>
        {titleCase(data)}
    </div>
  )
}

export default TopicBadge