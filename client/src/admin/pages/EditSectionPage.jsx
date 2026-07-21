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
  "OBJECTIVES_HERO",
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

{isHeroSection &&
 formData.sectionType === "HERO" && (
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


{formData.sectionType ===
  "PROFILE_MESSAGE" && (
  <div className="mb-6">

    <label className="block mb-2 font-medium">
      Profile Image
    </label>

    <select
      className="
        w-full
        border
        rounded-lg
        p-3
      "
      value={
        formData.content?.image || ""
      }
      onChange={(e) =>
        setFormData({
          ...formData,
          content: {
            ...formData.content,
            image:
              e.target.value,
          },
        })
      }
    >
      <option value="">
        Select Image
      </option>

      {media
        ?.filter(
          (item) =>
            item.resourceType ===
            "image"
        )
        .map((item) => (
          <option
            key={item._id}
            value={item.url}
          >
            {item.originalName}
          </option>
        ))}
    </select>

    {formData.content?.image && (
      <img
        src={
          formData.content.image
        }
        alt="Preview"
        className="
          mt-4
          h-48
          rounded-lg
          border
        "
      />
    )}
  </div>
)}



{formData.sectionType ===
  "ABOUT_GALLERY" && (
  <div className="mt-6">

    <label className="block mb-4 font-medium">
      Gallery Images
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
            formData.content?.images?.some(
              (img) =>
                img.imageUrl ===
                item.url
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
                    ?.images || [];

                const updated =
                  selected
                    ? current.filter(
                        (img) =>
                          img.imageUrl !==
                          item.url
                      )
                    : [
                        ...current,
                        {
                          imageUrl:
                            item.url,
                        },
                      ];

                setFormData({
                  ...formData,
                  content: {
                    ...formData.content,
                    images:
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
                className="
                  h-32
                  w-full
                  object-cover
                  rounded
                "
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
                  {item.originalName}
                </span>

              </div>

            </div>
          );

        })}
    </div>

  </div>
)}

{formData.sectionType ===
  "ABOUT_OVERVIEW" && (
  <div className="space-y-4 mb-6">

    <div>
      <label className="block mb-2 font-medium">
        Heading
      </label>

      <input
        type="text"
        className="w-full border p-3 rounded"
        value={
          formData.content?.heading || ""
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            content: {
              ...formData.content,
              heading:
                e.target.value,
            },
          })
        }
      />
    </div>

    <div>
      <label className="block mb-2 font-medium">
        Description
      </label>

      <textarea
        rows="6"
        className="w-full border p-3 rounded"
        value={
          formData.content?.description || ""
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            content: {
              ...formData.content,
              description:
                e.target.value,
            },
          })
        }
      />
    </div>

  </div>
)}


{formData.sectionType ===
  "ABOUT_HISTORY" && (
  <div className="space-y-6 mb-6">

    <div>
      <label className="block mb-2 font-medium">
        Heading
      </label>

      <input
        type="text"
        value={
          formData.content?.heading || ""
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            content: {
              ...formData.content,
              heading:
                e.target.value,
            },
          })
        }
        className="w-full border rounded p-3"
      />
    </div>

    {(formData.content?.timeline || []).map(
      (item, index) => (
        <div
          key={index}
          className="
            border
            rounded-lg
            p-4
            space-y-3
          "
        >

          <input
            type="text"
            placeholder="Year"
            value={item.year || ""}
            onChange={(e) => {

              const updated = [
                ...(formData.content
                  ?.timeline || []),
              ];

              updated[index].year =
                e.target.value;

              setFormData({
                ...formData,
                content: {
                  ...formData.content,
                  timeline:
                    updated,
                },
              });

            }}
            className="
              w-full
              border
              rounded
              p-3
            "
          />

          <input
            type="text"
            placeholder="Title"
            value={item.title || ""}
            onChange={(e) => {

              const updated = [
                ...(formData.content
                  ?.timeline || []),
              ];

              updated[index].title =
                e.target.value;

              setFormData({
                ...formData,
                content: {
                  ...formData.content,
                  timeline:
                    updated,
                },
              });

            }}
            className="
              w-full
              border
              rounded
              p-3
            "
          />

          <textarea
            rows="3"
            placeholder="Description"
            value={
              item.description || ""
            }
            onChange={(e) => {

              const updated = [
                ...(formData.content
                  ?.timeline || []),
              ];

              updated[index]
                .description =
                e.target.value;

              setFormData({
                ...formData,
                content: {
                  ...formData.content,
                  timeline:
                    updated,
                },
              });

            }}
            className="
              w-full
              border
              rounded
              p-3
            "
          />

          <button
            type="button"
            onClick={() => {

              const updated =
                (
                  formData.content
                    ?.timeline || []
                ).filter(
                  (_, i) =>
                    i !== index
                );

              setFormData({
                ...formData,
                content: {
                  ...formData.content,
                  timeline:
                    updated,
                },
              });

            }}
            className="
              text-red-600
              text-sm
            "
          >
            Remove Item
          </button>

        </div>
      )
    )}

    <button
      type="button"
      onClick={() => {

        const updated = [
          ...(formData.content
            ?.timeline || []),

          {
            year: "",
            title: "",
            description: "",
          },
        ];

        setFormData({
          ...formData,
          content: {
            ...formData.content,
            timeline:
              updated,
          },
        });

      }}
      className="
        px-4
        py-2
        bg-blue-600
        text-white
        rounded
      "
    >
      Add Timeline Item
    </button>

  </div>
)}

{formData.sectionType ===
  "ABOUT_QUICK_LINKS" && (
  <div className="space-y-6 mb-6">

    <div>
      <label className="block mb-2 font-medium">
        Heading
      </label>

      <input
        type="text"
        value={
          formData.content?.heading || ""
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            content: {
              ...formData.content,
              heading:
                e.target.value,
            },
          })
        }
        className="w-full border rounded p-3"
      />
    </div>

    {(formData.content?.links || []).map(
      (link, index) => (
        <div
          key={index}
          className="
            border
            rounded-lg
            p-4
            space-y-3
          "
        >

          <input
            type="text"
            placeholder="Title"
            value={link.title || ""}
            onChange={(e) => {

              const updated = [
                ...(formData.content
                  ?.links || []),
              ];

              updated[index].title =
                e.target.value;

              setFormData({
                ...formData,
                content: {
                  ...formData.content,
                  links:
                    updated,
                },
              });

            }}
            className="
              w-full
              border
              rounded
              p-3
            "
          />

          <textarea
            rows="2"
            placeholder="Description"
            value={
              link.description || ""
            }
            onChange={(e) => {

              const updated = [
                ...(formData.content
                  ?.links || []),
              ];

              updated[index]
                .description =
                e.target.value;

              setFormData({
                ...formData,
                content: {
                  ...formData.content,
                  links:
                    updated,
                },
              });

            }}
            className="
              w-full
              border
              rounded
              p-3
            "
          />

          <input
            type="text"
            placeholder="/about/example"
            value={link.path || ""}
            onChange={(e) => {

              const updated = [
                ...(formData.content
                  ?.links || []),
              ];

              updated[index].path =
                e.target.value;

              setFormData({
                ...formData,
                content: {
                  ...formData.content,
                  links:
                    updated,
                },
              });

            }}
            className="
              w-full
              border
              rounded
              p-3
            "
          />

          <button
            type="button"
            onClick={() => {

              const updated =
                (
                  formData.content
                    ?.links || []
                ).filter(
                  (_, i) =>
                    i !== index
                );

              setFormData({
                ...formData,
                content: {
                  ...formData.content,
                  links:
                    updated,
                },
              });

            }}
            className="
              text-red-600
              text-sm
            "
          >
            Remove Link
          </button>

        </div>
      )
    )}

    <button
      type="button"
      onClick={() => {

        const updated = [
          ...(formData.content
            ?.links || []),

          {
            title: "",
            description: "",
            path: "",
          },
        ];

        setFormData({
          ...formData,
          content: {
            ...formData.content,
            links:
              updated,
          },
        });

      }}
      className="
        px-4
        py-2
        bg-blue-600
        text-white
        rounded
      "
    >
      Add Link
    </button>

  </div>
)}


{formData.sectionType ===
  "OBJECTIVES_CONTENT" && (
  <div className="space-y-4 mb-6">

    <div>
      <label className="block mb-2 font-medium">
        Heading
      </label>

      <input
        type="text"
        value={
          formData.content?.heading || ""
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            content: {
              ...formData.content,
              heading:
                e.target.value,
            },
          })
        }
        className="w-full border rounded p-3"
      />
    </div>

    <div>
      <label className="block mb-2 font-medium">
        Description
      </label>

      <textarea
        rows="6"
        value={
          formData.content?.description || ""
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            content: {
              ...formData.content,
              description:
                e.target.value,
            },
          })
        }
        className="w-full border rounded p-3"
      />
    </div>

  </div>
)}

{formData.sectionType ===
  "OBJECTIVES_FOCUS_AREAS" && (
  <div className="space-y-6 mb-6">

    <div>
      <label className="block mb-2 font-medium">
        Heading
      </label>

      <input
        type="text"
        value={
          formData.content?.heading || ""
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            content: {
              ...formData.content,
              heading:
                e.target.value,
            },
          })
        }
        className="w-full border rounded p-3"
      />
    </div>

    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">
          Focus Area Items
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Add each focus area with a clear title and short description.
        </p>
      </div>

      {(formData.content?.items || []).map(
        (item, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-slate-800">
                Focus Area {index + 1}
              </h3>

              <button
                type="button"
                onClick={() => {
                  const updated =
                    (
                      formData.content
                        ?.items || []
                    ).filter(
                      (_, itemIndex) =>
                        itemIndex !== index
                    );

                  setFormData({
                    ...formData,
                    content: {
                      ...formData.content,
                      items:
                        updated,
                    },
                  });
                }}
                className="text-sm font-medium text-red-600 hover:text-red-700"
              >
                Remove
              </button>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Title
              </label>

              <input
                type="text"
                placeholder="Digital Inclusion"
                value={item.title || ""}
                onChange={(e) => {
                  const updated = [
                    ...(formData.content
                      ?.items || []),
                  ];

                  updated[index] = {
                    ...updated[index],
                    title:
                      e.target.value,
                  };

                  setFormData({
                    ...formData,
                    content: {
                      ...formData.content,
                      items:
                        updated,
                    },
                  });
                }}
                className="w-full border rounded p-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Description
              </label>

              <textarea
                rows="4"
                placeholder="Describe this focus area in simple language."
                value={
                  item.description || ""
                }
                onChange={(e) => {
                  const updated = [
                    ...(formData.content
                      ?.items || []),
                  ];

                  updated[index] = {
                    ...updated[index],
                    description:
                      e.target.value,
                  };

                  setFormData({
                    ...formData,
                    content: {
                      ...formData.content,
                      items:
                        updated,
                    },
                  });
                }}
                className="w-full border rounded p-3 leading-7"
              />
            </div>
          </div>
        )
      )}

      <button
        type="button"
        onClick={() => {
          const updated = [
            ...(formData.content
              ?.items || []),
            {
              title: "",
              description: "",
            },
          ];

          setFormData({
            ...formData,
            content: {
              ...formData.content,
              items:
                updated,
            },
          });
        }}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Focus Area
      </button>
    </div>

  </div>
)}

{formData.sectionType ===
  "OBJECTIVES_OUTCOMES" && (
  <div className="space-y-6 mb-6">

    <div>
      <label className="block mb-2 font-medium">
        Heading
      </label>

      <input
        type="text"
        value={
          formData.content?.heading || ""
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            content: {
              ...formData.content,
              heading:
                e.target.value,
            },
          })
        }
        className="w-full border rounded p-3"
      />
    </div>

    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">
          Outcome Items
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Add each expected outcome as a separate point.
        </p>
      </div>

      {(formData.content?.items || []).map(
        (item, index) => (
          <div
            key={index}
            className="flex gap-3"
          >
            <textarea
              rows="2"
              placeholder="Expected outcome"
              value={item || ""}
              onChange={(e) => {
                const updated = [
                  ...(formData.content
                    ?.items || []),
                ];

                updated[index] =
                  e.target.value;

                setFormData({
                  ...formData,
                  content: {
                    ...formData.content,
                    items:
                      updated,
                  },
                });
              }}
              className="w-full border rounded p-3 leading-7"
            />

            <button
              type="button"
              onClick={() => {
                const updated =
                  (
                    formData.content
                      ?.items || []
                  ).filter(
                    (_, itemIndex) =>
                      itemIndex !== index
                  );

                setFormData({
                  ...formData,
                  content: {
                    ...formData.content,
                    items:
                      updated,
                  },
                });
              }}
              className="self-start rounded border border-red-200 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50"
            >
              Remove
            </button>
          </div>
        )
      )}

      <button
        type="button"
        onClick={() => {
          const updated = [
            ...(formData.content
              ?.items || []),
            "",
          ];

          setFormData({
            ...formData,
            content: {
              ...formData.content,
              items:
                updated,
            },
          });
        }}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Outcome
      </button>
    </div>

  </div>
)}

{![ 
  "ABOUT_GALLERY",
  "ABOUT_OVERVIEW",
  "ABOUT_HISTORY", 
  "ABOUT_QUICK_LINKS", 
  "OBJECTIVES_CONTENT",
  "OBJECTIVES_FOCUS_AREAS",
  "OBJECTIVES_OUTCOMES",
].includes(
  formData.sectionType
) && (
  <>
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
            content: JSON.parse(
              e.target.value
            ),
          });
        } catch {
          //
        }
      }}
    />
  </>
)}

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
