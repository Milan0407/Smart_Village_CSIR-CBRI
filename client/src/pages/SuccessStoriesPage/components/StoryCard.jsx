import { Link }
  from "react-router-dom";

const StoryCard = ({
  story,
}) => {
  return (
    <div className="border rounded-xl p-6 shadow-sm">

      {story.featuredImage?.url && (
  <img
    src={story.featuredImage.url}
    alt={story.title}
    className="w-full h-52 object-cover rounded-lg mb-4"
  />
)}

      <p className="text-sm text-blue-600">
        {story.villageName}
      </p>

      <h3 className="text-xl font-semibold mt-2">
        {story.title}
      </h3>

      <p className="text-slate-600 mt-3">
        {story.summary}
      </p>

      <Link
        to={`/success-stories/${story.slug}`}
        className="inline-block mt-4 text-blue-700 font-medium"
      >
        Read More →
      </Link>

    </div>
  );
};

export default StoryCard;