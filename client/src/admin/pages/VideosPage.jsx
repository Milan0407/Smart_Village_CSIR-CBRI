import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  getVideos,
  deleteVideo,
} from "../services/video.service";

const VideosPage =
  () => {

    const [videos,
      setVideos] =
      useState([]);

    const loadVideos =
      async () => {

        const data =
  await getVideos();

console.log(
  "VIDEOS DATA",
  data
);

setVideos(
  Array.isArray(data)
    ? data
    : data?.videos || []
);
      };

    useEffect(() => {
      loadVideos();
    }, []);

    const handleDelete =
      async (id) => {

        const confirmDelete =
          window.confirm(
            "Delete video?"
          );

        if (
          !confirmDelete
        ) {
          return;
        }

        await deleteVideo(
          id
        );

        loadVideos();
      };

    return (

      <div>

        <div
          className="
            flex
            justify-between
            items-center
            mb-8
          "
        >

          <h1
            className="
              text-3xl
              font-bold
            "
          >
            Videos
          </h1>

          <Link
            to="/admin/videos/create"
            className="
              px-4
              py-2
              bg-blue-600
              text-white
              rounded
            "
          >
            Add Video
          </Link>

        </div>

        <div
          className="
            bg-white
            rounded-lg
            overflow-hidden
          "
        >

          <table
            className="
              w-full
            "
          >

            <thead>

              <tr
                className="
                  border-b
                "
              >
                <th className="p-4 text-left">
                  Title
                </th>

                <th className="p-4">
                  Order
                </th>

                <th className="p-4">
                  Active
                </th>

                <th className="p-4">
                  Actions
                </th>
              </tr>

            </thead>

            <tbody>

              {videos?.map(
                (
                  video
                ) => (

                  <tr
                    key={
                      video._id
                    }
                    className="
                      border-b
                    "
                  >

                    <td className="p-4">
                      {
                        video.title
                      }
                    </td>

                    <td className="p-4 text-center">
                      {
                        video.displayOrder
                      }
                    </td>

                    <td className="p-4 text-center">
                      {video.isActive
                        ? "Yes"
                        : "No"}
                    </td>

                    <td
                      className="
                        p-4
                        flex
                        gap-3
                        justify-center
                      "
                    >

                      <Link
                        to={`/admin/videos/${video._id}`}
                        className="
                          text-blue-600
                        "
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(
                            video._id
                          )
                        }
                        className="
                          text-red-600
                        "
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>
    );
  };

export default VideosPage;