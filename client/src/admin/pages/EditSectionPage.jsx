import {
  useEffect,
  useState,
} from "react";

import {
  getAllMedia,
} from "../services/media.service";

import {
  useParams,
} from "react-router-dom";

import {
  getSectionById,
  updateSection,
} from "../services/section.service";

const EditSectionPage = () => {
  const { id } =
    useParams();

const [formData,
  setFormData] =
  useState({
    title: "",
    subtitle: "",
    isVisible: true,
    content: {},
    metadata: {},
    sectionType: "",
  });

    const [media,
  setMedia] =
  useState([]);

  useEffect(() => {
    const loadSection =
      async () => {
        const data =
          await getSectionById(id);

          const mediaData =
  await getAllMedia();

setMedia(
  mediaData
);

        setFormData({
          title:
            data.title || "",
          subtitle:
            data.subtitle || "",
          isVisible:
            data.isVisible,
          content: {
  ...(data.content || {}),
  heroImages:
    data.content?.heroImages || [],
},
          metadata:
            data.metadata || {},
          sectionType:
            data.sectionType || "",
        });
      };

    loadSection();
  }, [id]);

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      await updateSection(
        id,
        formData
      );

      alert(
        "Section updated successfully"
      );
    };

    const heroSections = [
  "HERO",
  "ABOUT_HERO",
  "CSIR_LABS_HERO",
  "NODAL_LAB_HERO",
  "PARTICIPATING_LABS_HERO",
  "SMART_VILLAGE_HERO",
  "CONTACT_HERO",
  "NEWS_HERO",
  "SUCCESS_STORIES_HERO",
];

const isHeroSection =
  heroSections.includes(
    formData.sectionType
  );

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Edit Section
      </h1>

      <form
        onSubmit={
          handleSubmit
        }
        className="space-y-6 max-w-3xl"
      >

        <div>
          <label>
            Title
          </label>

          <input
            className="w-full border p-3 rounded"
            value={
              formData.title
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                title:
                  e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>
            Subtitle
          </label>

          <input
            className="w-full border p-3 rounded"
            value={
              formData.subtitle
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                subtitle:
                  e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>
            Visible
          </label>

          <input
            type="checkbox"
            checked={
              formData.isVisible
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                isVisible:
                  e.target.checked,
              })
            }
          />
        </div>

        <div>

{isHeroSection && (

  <div>

    <label>
      Hero Image
    </label>

    <select
      className="w-full border p-3 rounded"
      value={
        formData.content
          ?.heroImage || ""
      }
      onChange={(e) =>
        setFormData({
          ...formData,

          content: {
            ...formData.content,

            heroImage:
              e.target.value,
          },
        })
      }
    >

      <option value="">
        Select Hero Image
      </option>

      {media
        .filter(
          (item) =>
            item.resourceType ===
            "image"
        )
        .map(
          (item) => (
            <option
              key={item._id}
              value={item._id}
            >
              {item.originalName}
            </option>
          )
        )}

    </select>

    {formData.content?.heroImage && (

  <div className="mt-4">

    <img
      src={
        media.find(
          (item) =>
            item._id ===
            formData.content.heroImage
        )?.url
      }
      alt="Hero Preview"
      className="w-full max-w-md rounded-lg border"
    />

  </div>

)}

  </div>

)}

{isHeroSection && (

  <div className="mt-6">

    <label className="block mb-4 font-medium">
      Hero Slider Images
    </label>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

      {media
        .filter(
          (item) =>
            item.resourceType ===
            "image"
        )
        .map((item) => {

          const selected =
            formData.content
              ?.heroImages
              ?.includes(
                item._id
              );

          return (

            <div
              key={item._id}
              className={`
                border rounded-lg p-2 cursor-pointer
                ${
                  selected
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300"
                }
              `}
              onClick={() => {

                const current =
                  formData.content
                    ?.heroImages || [];

                const updated =
                  selected
                    ? current.filter(
                        (id) =>
                          id !==
                          item._id
                      )
                    : [
                        ...current,
                        item._id,
                      ];

                setFormData({
                  ...formData,

                  content: {
                    ...formData.content,

                    heroImages:
                      updated,
                  },
                });

              }}
            >

              <img
                src={item.url}
                alt={
                  item.originalName
                }
                className="h-32 w-full object-cover rounded"
              />

              <div className="flex items-center mt-2">

                <input
                  type="checkbox"
                  checked={
                    selected
                  }
                  readOnly
                />

                <span className="ml-2 text-sm truncate">
                  {
                    item.originalName
                  }
                </span>

              </div>

            </div>

          );

        })}

    </div>

  </div>

)}
          <label>
            Content (JSON)
          </label>

          <textarea
            rows="10"
            className="w-full border p-3 rounded font-mono"
            value={JSON.stringify(
              formData.content,
              null,
              2
            )}
            onChange={(e) => {
              try {
                setFormData({
                  ...formData,
                  content:
                    JSON.parse(
                      e.target.value
                    ),
                });
              } catch {
                //
              }
            }}
          />

        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded"
        >
          Save Changes
        </button>

      </form>

    </div>
  );
};

export default EditSectionPage;