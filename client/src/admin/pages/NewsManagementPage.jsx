import {
  useEffect,
  useState,
} from "react";

import { Link }
  from "react-router-dom";

import {
  getAllNews,
  deleteNews,
} from "../services/news.service";

const NewsManagementPage =
  () => {
    const [news,
      setNews] =
      useState([]);

    const loadNews =
      async () => {
        const data =
          await getAllNews();

        setNews(data);
      };

    useEffect(() => {
      loadNews();
    }, []);

    const handleDelete =
      async (id) => {
        const confirmDelete =
          window.confirm(
            "Delete this news article?"
          );

        if (
          !confirmDelete
        )
          return;

        await deleteNews(
          id
        );

        loadNews();
      };

    return (
      <div>

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            News Management
          </h1>

          <Link
            to="/admin/news/create"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Create News
          </Link>

        </div>

        <div className="bg-white rounded-xl shadow">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-4 text-left">
                  Title
                </th>

                <th className="p-4 text-left">
                  Slug
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {news.map(
                (item) => (
                  <tr
                    key={
                      item._id
                    }
                    className="border-b"
                  >

                    <td className="p-4">
                      {
                        item.title
                      }
                    </td>

                    <td className="p-4">
                      {
                        item.slug
                      }
                    </td>

                    <td className="p-4 space-x-4">

                      <Link
                        to={`/admin/news/${item._id}`}
                        className="text-blue-600"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(
                            item._id
                          )
                        }
                        className="text-red-600"
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

export default NewsManagementPage;