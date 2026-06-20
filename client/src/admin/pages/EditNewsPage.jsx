import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import NewsForm
  from "../components/news/NewsForm";

import {
  getNewsById,
  updateNews,
} from "../services/news.service";

const EditNewsPage =
  () => {
    const { id } =
      useParams();

    const navigate =
      useNavigate();

    const [loading,
      setLoading] =
      useState(true);

    const [news,
      setNews] =
      useState(null);

    useEffect(() => {
      const loadNews =
        async () => {
          try {
            const data =
              await getNewsById(
                id
              );

            setNews(data);
          } finally {
            setLoading(
              false
            );
          }
        };

      loadNews();
    }, [id]);

    const handleUpdate =
      async (data) => {
        await updateNews(
          id,
          data
        );

        navigate(
          "/admin/news"
        );
      };

    if (loading) {
      return (
        <h1>
          Loading...
        </h1>
      );
    }

    if (!news) {
      return (
        <h1>
          News not found
        </h1>
      );
    }

    return (
      <div>

        <h1 className="text-4xl font-bold mb-8">
          Edit News
        </h1>

        <NewsForm
          initialValues={{
            title:
              news.title ||
              "",

            slug:
              news.slug ||
              "",
              featuredImage:
              news.featuredImage?._id || "",

            summary:
              news.summary ||
              "",

            content:
              news.content ||
              "",
          }}
          onSubmit={
            handleUpdate
          }
        />

      </div>
    );
  };

export default EditNewsPage;