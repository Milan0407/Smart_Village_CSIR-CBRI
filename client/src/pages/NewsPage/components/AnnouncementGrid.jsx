import {
  Link,
} from "react-router-dom";

const AnnouncementGrid = ({
  announcements,
}) => {
  return (
    <div
      className="
        grid
        md:grid-cols-3
        gap-6
      "
    >
      {announcements.map(
        (
          announcement
        ) => (
          <div
            key={
              announcement._id
            }
            className="
              border
              rounded-xl
              p-6
              shadow-sm
              hover:shadow-lg
              transition
            "
          >
            <span
              className="
                inline-block
                px-3
                py-1
                rounded-full
                bg-orange-100
                text-orange-700
                text-xs
                font-semibold
              "
            >
              ANNOUNCEMENT
            </span>

            <h3
              className="
                text-xl
                font-semibold
                mt-3
              "
            >
              {
                announcement.title
              }
            </h3>

            <p
              className="
                text-slate-600
                mt-3
                line-clamp-3
              "
            >
              {
                announcement.summary
              }
            </p>

            <Link
              to={`/announcements/${announcement.slug}`}
              className="
                inline-block
                mt-4
                text-orange-700
                font-medium
              "
            >
              Read More →
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default AnnouncementGrid;