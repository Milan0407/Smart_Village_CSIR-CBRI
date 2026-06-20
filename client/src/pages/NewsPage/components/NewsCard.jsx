import { Link }
  from "react-router-dom";

const NewsCard = ({
  article,
}) => {
  return (
    <div className="border rounded-xl p-6 shadow-sm">

      {article.featuredImage?.url && (
  <img
    src={article.featuredImage.url}
    alt={article.title}
    className="w-full h-52 object-cover rounded-lg mb-4"
  />
)}

      <span className="text-sm text-blue-600">
        {article.category}
      </span>

      <h3 className="text-xl font-semibold mt-2">
        {article.title}
      </h3>

      <p className="text-slate-600 mt-3">
        {article.summary}
      </p>

      <Link
        to={`/news/${article.slug}`}
        className="inline-block mt-4 text-blue-700 font-medium"
      >
        Read More →
      </Link>

    </div>
  );
};

export default NewsCard;