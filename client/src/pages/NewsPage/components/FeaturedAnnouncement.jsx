import {
  Link,
} from "react-router-dom";

const FeaturedAnnouncement = ({
  announcement,
}) => {
  if (!announcement)
    return null;

  return (
    <section
      className="
        mb-12
        p-8
        rounded-xl
        bg-orange-50
        border
        border-orange-200
      "
    >
      <span
        className="
          text-orange-700
          font-semibold
        "
      >
        📢 Featured Announcement
      </span>

      <h2
        className="
          text-3xl
          font-bold
          mt-3
        "
      >
        {announcement.title}
      </h2>

      <p
        className="
          mt-4
          text-slate-600
        "
      >
        {announcement.summary}
      </p>

      <Link
        to={`/announcements/${announcement.slug}`}
        className="
          inline-block
          mt-5
          text-orange-700
          font-semibold
        "
      >
        Read Announcement →
      </Link>
    </section>
  );
};

export default FeaturedAnnouncement;