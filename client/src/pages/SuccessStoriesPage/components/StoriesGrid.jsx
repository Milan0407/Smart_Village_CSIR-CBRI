import StoryCard
  from "./StoryCard";

const StoriesGrid = ({
  stories,
}) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      {stories.map(
        (story) => (
          <StoryCard
            key={story._id}
            story={story}
          />
        )
      )}

    </div>
  );
};

export default StoriesGrid;