const FeaturedNews = ({
  article,
}) => {
  if (!article)
    return null;

  return (
    <section className="mb-12 p-8 rounded-xl bg-slate-100">

      {article.featuredImage?.url && (
  <img
    src={article.featuredImage.url}
    alt={article.title}
    className="w-full h-80 object-cover rounded-xl mb-6"
  />
)}

      <span className="text-blue-700 font-medium">
        Featured News
      </span>

      <h2 className="text-4xl font-bold mt-3">
        {article.title}
      </h2>

      <p className="mt-4 text-slate-600">
        {article.summary}
      </p>

    </section>
  );
};

export default FeaturedNews;