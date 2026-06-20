import {
  useEffect,
  useState,
} from "react";

import MainLayout
  from "../../layouts/MainLayout";

import {
  getAllStories,
} from "../../services/successStory.service";

import FeaturedStory
  from "./components/FeaturedStory";

import StoriesGrid
  from "./components/StoriesGrid";

const SuccessStoriesPage =
  () => {
    const [
      stories,
      setStories,
    ] = useState([]);

    useEffect(() => {
      const loadStories =
        async () => {
          const data =
            await getAllStories();

          setStories(data);
        };

      loadStories();
    }, []);

    const featured =
      stories.find(
        (story) =>
          story.isFeatured
      );

    return (
      <>
      <MainLayout>

        <div className="max-w-7xl mx-auto px-6 py-20">

          <h1 className="text-5xl font-bold mb-12">
            Success Stories
          </h1>

          <FeaturedStory
            story={featured}
          />

          <StoriesGrid
            stories={stories}
          />

        </div>

      </MainLayout  >
      </>
    );
  };

export default SuccessStoriesPage;