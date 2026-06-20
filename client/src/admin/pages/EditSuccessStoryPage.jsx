import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import SuccessStoryForm
  from "../components/successStories/SuccessStoryForm";

import {
  getStoryById,
  updateStory,
} from "../services/successStory.service";

const EditSuccessStoryPage = () => {
  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [loading,
    setLoading] =
    useState(true);

  const [story,
    setStory] =
    useState(null);

  useEffect(() => {
    const loadStory =
      async () => {
        try {
          const data =
            await getStoryById(id);

          setStory(data);
        } finally {
          setLoading(false);
        }
      };

    loadStory();
  }, [id]);

  const handleUpdate =
    async (data) => {
      await updateStory(
        id,
        data
      );

      navigate(
        "/admin/success-stories"
      );
    };

  if (loading) {
    return (
      <h1>
        Loading...
      </h1>
    );
  }

  if (!story) {
    return (
      <h1>
        Story not found
      </h1>
    );
  }

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Edit Success Story
      </h1>

      <SuccessStoryForm
        initialValues={{
          title:
            story.title || "",

          slug:
            story.slug || "",

          villageName:
            story.villageName || "",

            featuredImage:
  story.featuredImage?._id || "",

          summary:
            story.summary || "",

          story:
            story.story || "",
        }}
        onSubmit={
          handleUpdate
        }
      />

    </div>
  );
};

export default EditSuccessStoryPage;