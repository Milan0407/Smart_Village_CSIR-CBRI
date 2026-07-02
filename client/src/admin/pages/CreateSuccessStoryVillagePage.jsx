import { useNavigate } from "react-router-dom";

import SuccessStoryVillageForm from "../components/successStoryVillages/SuccessStoryVillageForm";

import {
  createSuccessStoryVillage,
} from "../services/successStoryVillage.service";

const buildVillagePayload = (
  data
) => {
  const payload = {
    ...data,
    video: {
      type:
        data.video?.type ||
        "YOUTUBE",
      url:
        data.video?.url || "",
      embedUrl:
        data.video?.embedUrl ||
        "",
      media:
        data.video?.media || null,
    },
  };

  if (
    payload.video.type ===
    "YOUTUBE"
  ) {
    payload.video.media = null;
  }

  if (
    payload.video.type ===
    "EXTERNAL"
  ) {
    payload.video.media = null;
    payload.video.embedUrl = "";
  }

  if (
    payload.video.type ===
    "UPLOAD"
  ) {
    payload.video.url = "";
    payload.video.embedUrl = "";
    payload.video.media =
      payload.video.media || null;
  }

  return payload;
};

const CreateSuccessStoryVillagePage =
  () => {
    const navigate =
      useNavigate();

    const handleCreate =
      async (data) => {
        try {
          const payload =
            buildVillagePayload(
              data
            );

          await createSuccessStoryVillage(
            payload
          );

          navigate(
            "/admin/success-story-villages"
          );
        } catch (error) {
          console.error(error);
        }
      };

    return (
      <div>
        <h1 className="text-4xl font-bold mb-8">
          Create Success Story
          Village
        </h1>

        <SuccessStoryVillageForm
          initialValues={{
            name: "",
            slug: "",
            shortDescription:
              "",
            fullDescription:
              "",
            coverImage: "",
            bannerImage: "",
            video: {
              type: "YOUTUBE",
              url: "",
              embedUrl: "",
              media: "",
            },
            sortOrder: 0,
            isPublished: true,
          }}
          onSubmit={handleCreate}
        />
      </div>
    );
  };

export default
  CreateSuccessStoryVillagePage;