import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";


import {
  getStoryBySlug,
} from "../../services/successStory.service";
import MainLayout from "../../layouts/MainLayout";

const SuccessStoryDetailPage =
  () => {
    const { slug } =
      useParams();

    const [
      article,
      setArticle,
    ] = useState(null);

    const [
      loading,
      setLoading,
    ] = useState(true);

    useEffect(() => {
      const loadArticle =
        async () => {
          try {
            const data =
              await getStoryBySlug(
                slug
              );

            setArticle(data);
          } catch (
            error
          ) {
            console.error(
              error
            );
          } finally {
            setLoading(
              false
            );
          }
        };

      loadArticle();
    }, [slug]);

    if (loading) {
      return (
        <h1>
          Loading...
        </h1>
      );
    }

    if (!article) {
      return (
        <h1>
          Article not found
        </h1>
      );
    }

    return (
      <>
        <MainLayout>

        <div className="max-w-4xl mx-auto px-6 py-20">

          {article.featuredImage?.url && (
  <img
    src={article.featuredImage.url}
    alt={article.title}
    className="w-full h-[450px] object-cover rounded-xl mb-8"
  />
)}

          <span className="text-blue-600 font-medium">
            {article.category}
          </span>

          <h1 className="text-5xl font-bold mt-4">
            {article.title}
          </h1>

<p className="text-slate-500 mt-4">
  {new Date(
    article.publishedAt
  ).toLocaleDateString()}
</p>

<p className="mt-4 font-semibold text-blue-600">
  Village: {article.villageName}
</p>

<p className="mt-8 text-xl text-slate-600">
  {article.summary}
</p>

<div className="mt-10 text-slate-700 leading-8">
  {article.story}
</div>

        </div>

        </MainLayout>
      </>
    );
  };

export default SuccessStoryDetailPage;