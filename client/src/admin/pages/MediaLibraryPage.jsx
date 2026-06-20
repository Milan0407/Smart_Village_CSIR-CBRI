import {
  useEffect,
  useState,
} from "react";

import {
  getAllMedia,
  uploadMedia,
  deleteMedia,
} from "../services/media.service";

const MediaLibraryPage = () => {
  const [media,
    setMedia] =
    useState([]);

  const [uploading,
    setUploading] =
    useState(false);

  const loadMedia =
    async () => {
      const data =
        await getAllMedia();

      setMedia(data);
    };

  useEffect(() => {
    loadMedia();
  }, []);

  const handleUpload =
    async (e) => {
      const file =
        e.target.files[0];

      if (!file) {
        return;
      }

      try {
        setUploading(true);

        await uploadMedia(
          file
        );

        await loadMedia();
      } finally {
        setUploading(false);
      }
    };

  const handleDelete =
    async (id) => {
      const confirmed =
        window.confirm(
          "Delete this media?"
        );

      if (!confirmed) {
        return;
      }

      await deleteMedia(id);

      loadMedia();
    };

  const copyUrl =
    async (url) => {
      await navigator
        .clipboard
        .writeText(url);

      alert(
        "URL copied"
      );
    };

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Media Library
        </h1>

        <label className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">

          {uploading
            ? "Uploading..."
            : "Upload Media"}

          <input
            type="file"
            accept="image/*,video/*"
            onChange={
              handleUpload
            }
            className="hidden"
          />

        </label>

      </div>

      <div className="grid grid-cols-4 gap-6">

        {media.map(
          (item) => (
            <div
              key={item._id}
              className="border rounded-lg p-4"
            >

              {item.resourceType ===
              "video" ? (
                <video
                  src={item.url}
                  controls
                  className="w-full h-40 object-cover rounded"
                />
              ) : (
                <img
                  src={item.url}
                  alt={
                    item.originalName
                  }
                  className="w-full h-40 object-cover rounded"
                />
              )}

              <p className="mt-3 text-sm break-all">
                {item.originalName}
              </p>

              <div className="flex gap-2 mt-3">

                <button
                  onClick={() =>
                    copyUrl(
                      item.url
                    )
                  }
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Copy URL
                </button>

                <button
                  onClick={() =>
                    handleDelete(
                      item._id
                    )
                  }
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
};

export default MediaLibraryPage;