import {
  useEffect,
  useState,
} from "react";

import {
  getAllMedia,
} from "../../services/media.service";

const getYoutubeEmbedUrl = (
  url = ""
) => {
  if (!url) return "";

  if (
    url.includes(
      "youtube.com/watch?v="
    )
  ) {
    const videoId =
      url
        .split("v=")[1]
        ?.split("&")[0];

    return videoId
      ? `https://www.youtube.com/embed/${videoId}`
      : "";
  }

  if (url.includes("youtu.be/")) {
    const videoId =
      url
        .split("youtu.be/")[1]
        ?.split("?")[0];

    return videoId
      ? `https://www.youtube.com/embed/${videoId}`
      : "";
  }

  if (
    url.includes(
      "youtube.com/shorts/"
    )
  ) {
    const videoId =
      url
        .split(
          "youtube.com/shorts/"
        )[1]
        ?.split("?")[0];

    return videoId
      ? `https://www.youtube.com/embed/${videoId}`
      : "";
  }

  return "";
};

const SuccessStoryVillageForm = ({
  initialValues,
  onSubmit,
}) => {
  const [media, setMedia] =
    useState([]);

  const [formData, setFormData] =
    useState({
      name:
        initialValues?.name || "",
      slug:
        initialValues?.slug || "",
      shortDescription:
        initialValues?.shortDescription ||
        "",
      fullDescription:
        initialValues?.fullDescription ||
        "",
      coverImage:
        initialValues?.coverImage?._id ||
        initialValues?.coverImage ||
        "",
      bannerImage:
        initialValues?.bannerImage?._id ||
        initialValues?.bannerImage ||
        "",
      video: {
        type:
          initialValues?.video
            ?.type ||
          "YOUTUBE",
        url:
          initialValues?.video
            ?.url || "",
        embedUrl:
          initialValues?.video
            ?.embedUrl || "",
        media:
          initialValues?.video
            ?.media?._id ||
          initialValues?.video
            ?.media ||
          "",
      },
      sortOrder:
        initialValues?.sortOrder ||
        0,
      isPublished:
        initialValues?.isPublished ??
        true,
    });

  useEffect(() => {
    const loadMedia =
      async () => {
        try {
          const data =
            await getAllMedia();

          setMedia(data || []);
        } catch (error) {
          console.error(error);
        }
      };

    loadMedia();
  }, []);

  useEffect(() => {
    setFormData({
      name:
        initialValues?.name || "",
      slug:
        initialValues?.slug || "",
      shortDescription:
        initialValues?.shortDescription ||
        "",
      fullDescription:
        initialValues?.fullDescription ||
        "",
      coverImage:
        initialValues?.coverImage?._id ||
        initialValues?.coverImage ||
        "",
      bannerImage:
        initialValues?.bannerImage?._id ||
        initialValues?.bannerImage ||
        "",
      video: {
        type:
          initialValues?.video
            ?.type ||
          "YOUTUBE",
        url:
          initialValues?.video
            ?.url || "",
        embedUrl:
          initialValues?.video
            ?.embedUrl || "",
        media:
          initialValues?.video
            ?.media?._id ||
          initialValues?.video
            ?.media ||
          "",
      },
      sortOrder:
        initialValues?.sortOrder ||
        0,
      isPublished:
        initialValues?.isPublished ??
        true,
    });
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "sortOrder"
          ? Number(value)
          : value,
    }));
  };

  const handleVideoTypeChange = (
    e
  ) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      video: {
        type: value,
        url: "",
        embedUrl: "",
        media: "",
      },
    }));
  };

  const handleVideoUrlChange = (
    e
  ) => {
    const value = e.target.value;

    if (
      formData.video.type ===
      "YOUTUBE"
    ) {
      setFormData((prev) => ({
        ...prev,
        video: {
          ...prev.video,
          url: value,
          embedUrl:
            getYoutubeEmbedUrl(
              value
            ),
          media: "",
        },
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      video: {
        ...prev.video,
        url: value,
        embedUrl: "",
        media: "",
      },
    }));
  };

  const handleVideoMediaChange = (
    e
  ) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      video: {
        ...prev.video,
        media: value,
        url: "",
        embedUrl: "",
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        name="name"
        placeholder="Village Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        name="slug"
        placeholder="Slug"
        value={formData.slug}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <textarea
        name="shortDescription"
        placeholder="Short Description"
        rows="3"
        value={
          formData.shortDescription
        }
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <textarea
        name="fullDescription"
        placeholder="Full Description"
        rows="5"
        value={
          formData.fullDescription
        }
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <div>
        <label className="block mb-2">
          Cover Image
        </label>

        <select
          name="coverImage"
          value={
            formData.coverImage || ""
          }
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="">
            Select Cover Image
          </option>

          {media
            .filter(
              (item) =>
                item.resourceType ===
                "image"
            )
            .map((item) => (
              <option
                key={item._id}
                value={item._id}
              >
                {item.originalName}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label className="block mb-2">
          Banner Image
        </label>

        <select
          name="bannerImage"
          value={
            formData.bannerImage || ""
          }
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="">
            Select Banner Image
          </option>

          {media
            .filter(
              (item) =>
                item.resourceType ===
                "image"
            )
            .map((item) => (
              <option
                key={item._id}
                value={item._id}
              >
                {item.originalName}
              </option>
            ))}
        </select>
      </div>

      {/* VIDEO SOURCE */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Video Source
        </label>

        <select
          value={formData.video.type}
          onChange={
            handleVideoTypeChange
          }
          className="w-full border rounded-md px-3 py-2"
        >
          <option value="YOUTUBE">
            YouTube Link
          </option>
          <option value="EXTERNAL">
            External Link
          </option>
          <option value="UPLOAD">
            Upload Video
          </option>
        </select>

        {formData.video.type ===
          "YOUTUBE" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              YouTube URL
            </label>

            <input
              type="text"
              value={
                formData.video.url
              }
              onChange={
                handleVideoUrlChange
              }
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full border rounded-md px-3 py-2"
            />

            {formData.video
              .embedUrl && (
              <p className="text-xs text-green-600 mt-1">
                Embed URL generated
                successfully
              </p>
            )}
          </div>
        )}

        {formData.video.type ===
          "EXTERNAL" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              External Video URL
            </label>

            <input
              type="text"
              value={
                formData.video.url
              }
              onChange={
                handleVideoUrlChange
              }
              placeholder="https://www.linkedin.com/..."
              className="w-full border rounded-md px-3 py-2"
            />

            <p className="text-xs text-gray-500 mt-1">
              Use this for LinkedIn
              or other external
              video links.
            </p>
          </div>
        )}

        {formData.video.type ===
          "UPLOAD" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Uploaded Video
            </label>

            <select
              value={
                formData.video.media
              }
              onChange={
                handleVideoMediaChange
              }
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">
                Select uploaded video
              </option>

              {media
                .filter(
                  (item) =>
                    item.resourceType ===
                    "video"
                )
                .map((item) => (
                  <option
                    key={item._id}
                    value={item._id}
                  >
                    {item.originalName}
                  </option>
                ))}
            </select>

            <p className="text-xs text-gray-500 mt-1">
              Upload videos in Media
              Library first, then
              select them here.
            </p>
          </div>
        )}
      </div>

      <input
        name="sortOrder"
        type="number"
        placeholder="Sort Order"
        value={formData.sortOrder}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={
            formData.isPublished ||
            false
          }
          onChange={(e) =>
            setFormData(
              (prev) => ({
                ...prev,
                isPublished:
                  e.target.checked,
              })
            )
          }
        />
        Published
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Save Village
      </button>
    </form>
  );
};

export default SuccessStoryVillageForm;