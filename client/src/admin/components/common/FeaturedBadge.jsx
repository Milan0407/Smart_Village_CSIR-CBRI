import { Star } from "lucide-react";

const FeaturedBadge = ({
  featured,
}) => {
  if (!featured) return null;

  return (
    <span
      className="
        inline-flex
        items-center
        gap-1
        rounded-full
        bg-amber-100
        px-3
        py-1
        text-xs
        font-semibold
        text-amber-700
      "
    >
      <Star
        size={12}
        fill="currentColor"
      />

      Featured
    </span>
  );
};

export default FeaturedBadge;