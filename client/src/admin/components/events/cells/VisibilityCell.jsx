import PublishBadge from "../../common/PublishBadge";
import FeaturedBadge from "../../common/FeaturedBadge";

const VisibilityCell = ({
  published,
  featured,
}) => {
  return (
    <td className="px-6 py-5 align-top">
      <div className="flex flex-col gap-2">
        <PublishBadge
          published={published}
        />

        <FeaturedBadge
          featured={featured}
        />
      </div>
    </td>
  );
};

export default VisibilityCell;