import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import SuccessStoryVillageForm from "../components/successStoryVillages/SuccessStoryVillageForm";

import {
  getSuccessStoryVillageById,
  updateSuccessStoryVillage,
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

const EditSuccessStoryVillagePage =
  () => {
    const { id } = useParams();

    const navigate =
      useNavigate();

    const [loading, setLoading] =
      useState(true);

    const [village, setVillage] =
      useState(null);

    useEffect(() => {
      const loadVillage =
        async () => {
          try {
            const data =
              await getSuccessStoryVillageById(
                id
              );

            setVillage({
              ...data,
              coverImage:
                data.coverImage?._id ||
                data.coverImage ||
                "",
              bannerImage:
                data.bannerImage?._id ||
                data.bannerImage ||
                "",
              video: {
                type:
                  data.video?.type ||
                  "YOUTUBE",
                url:
                  data.video?.url ||
                  "",
                embedUrl:
                  data.video
                    ?.embedUrl ||
                  "",
                media:
                  data.video
                    ?.media?._id ||
                  data.video?.media ||
                  "",
              },
            });
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        };

      loadVillage();
    }, [id]);

    const handleUpdate =
      async (formData) => {
        try {
          const payload =
            buildVillagePayload(
              formData
            );

          await updateSuccessStoryVillage(
            id,
            payload
          );

          navigate(
            "/admin/success-story-villages"
          );
        } catch (error) {
          console.error(error);
        }
      };

    if (loading) {
      return (
        <div className="p-6">
          Loading...
        </div>
      );
    }

    if (!village) {
      return (
        <div className="p-6">
          Village not found
        </div>
      );
    }

    return (
      <div>
        <h1 className="text-4xl font-bold mb-8">
          Edit Success Story
          Village
        </h1>

        <SuccessStoryVillageForm
          initialValues={village}
          onSubmit={handleUpdate}
        />
      </div>
    );
  };

export default
  EditSuccessStoryVillagePage;