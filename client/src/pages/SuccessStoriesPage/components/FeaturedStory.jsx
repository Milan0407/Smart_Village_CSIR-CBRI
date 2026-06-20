const FeaturedStory = ({
  story,
}) => {
  if (!story)
    return null;

  return (
    <section className="mb-12 p-8 rounded-xl bg-slate-100">

      {story.featuredImage?.url && (
  <img
    src={story.featuredImage.url}
    alt={story.title}
    className="w-full h-80 object-cover rounded-xl mb-6"
  />
)}

      <span className="text-blue-700 font-medium">
        Featured Story
      </span>

      <h2 className="text-4xl font-bold mt-3">
        {story.title}
      </h2>

      <p className="mt-4 text-slate-600">
        {story.summary}
      </p>

      <p className="mt-4 font-medium">
        Village:
        {" "}
        {story.villageName}
      </p>

    </section>
  );
};

export default FeaturedStory;