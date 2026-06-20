import NewsCard
  from "./NewsCard";

const NewsGrid = ({
  news,
}) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      {news.map(
        (article) => (
          <NewsCard
            key={
              article._id
            }
            article={
              article
            }
          />
        )
      )}

    </div>
  );
};

export default NewsGrid;