import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import {
  getAnnouncementBySlug,
} from "../../services/announcement.service";

const AnnouncementDetailPage = () => {
  const { slug } = useParams();

  const [
    announcement,
    setAnnouncement,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {
    loadAnnouncement();
  }, [slug]);

  const loadAnnouncement =
    async () => {
      try {
        const data =
          await getAnnouncementBySlug(
            slug
          );

        setAnnouncement(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <section className="py-32">
        <div className="text-center">
          Loading announcement...
        </div>
      </section>
    );
  }

  if (!announcement) {
    return (
      <section className="py-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Announcement Not Found
          </h2>

          <Link
            to="/"
            className="
              text-blue-600
              font-semibold
            "
          >
            Back To Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Breadcrumb */}

        <div className="mb-6">
          <Link
            to="/"
            className="
              text-blue-600
              hover:underline
            "
          >
            Home
          </Link>

          <span className="mx-2">
            /
          </span>

          <span className="text-slate-500">
            Announcement
          </span>
        </div>

        {/* Card */}

        <div
          className="
            bg-white
            rounded-3xl
            shadow-lg
            p-8
            md:p-12
          "
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              gap-2
              bg-orange-100
              text-orange-700
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            📢 Announcement
          </span>

          {/* Title */}

          <h1
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-slate-900
              mt-6
              mb-4
            "
          >
            {announcement.title}
          </h1>

          {/* Date */}

          <p
            className="
              text-slate-500
              mb-8
            "
          >
            Published on{" "}
            {announcement.publishDate
              ? new Date(
                  announcement.publishDate
                ).toLocaleDateString(
                  "en-IN"
                )
              : new Date(
                  announcement.createdAt
                ).toLocaleDateString(
                  "en-IN"
                )}
          </p>

          {/* Summary */}

          {announcement.summary && (
            <div
              className="
                bg-blue-50
                border-l-4
                border-blue-600
                p-6
                rounded-xl
                mb-8
              "
            >
              <p
                className="
                  text-lg
                  text-slate-700
                  leading-relaxed
                "
              >
                {announcement.summary}
              </p>
            </div>
          )}

          {/* Content */}

          <div
            className="
              text-slate-700
              leading-8
              whitespace-pre-line
              text-lg
            "
          >
            {announcement.content}
          </div>

          {/* Actions */}

          <div
            className="
              flex
              flex-wrap
              gap-4
              mt-10
              pt-8
              border-t
            "
          >

            {announcement.pdfUrl && (
              <a
                href={
                  announcement.pdfUrl
                }
                target="_blank"
                rel="noreferrer"
                className="
                  px-6
                  py-3
                  bg-blue-600
                  text-white
                  rounded-lg
                  hover:bg-blue-700
                  transition
                "
              >
                📄 Download PDF
              </a>
            )}

            {announcement.externalLink &&
              announcement.externalLink.trim() !==
                "" && (
                <a
                  href={
                    announcement.externalLink
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-6
                    py-3
                    border
                    border-blue-600
                    text-blue-600
                    rounded-lg
                    hover:bg-blue-50
                    transition
                  "
                >
                  🔗 Visit Link
                </a>
              )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default AnnouncementDetailPage;