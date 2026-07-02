import {
  useEffect,
  useState,
} from "react";

import { Link }
  from "react-router-dom";

import {
  getAllSuccessStoryVillages,
  deleteSuccessStoryVillage,
} from "../services/successStoryVillage.service";

const SuccessStoryVillagesPage =
  () => {
    const [villages, setVillages] =
      useState([]);

    const loadVillages =
      async () => {
        try {
          const data =
            await getAllSuccessStoryVillages();

          setVillages(data);
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
      loadVillages();
    }, []);

    const handleDelete =
      async (id) => {
        const confirmed =
          window.confirm(
            "Delete success story village?"
          );

        if (!confirmed) return;

        try {
          await deleteSuccessStoryVillage(id);
          loadVillages();
        } catch (error) {
          console.error(error);
        }
      };

    return (
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            Success Story Villages
          </h1>

          <Link
            to="/admin/success-story-villages/create"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Village
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left">
                  Name
                </th>
                <th className="p-4 text-left">
                  Slug
                </th>
                <th className="p-4 text-left">
                  Sort Order
                </th>
                <th className="p-4 text-left">
                  Status
                </th>
                <th className="p-4 text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {villages.map((village) => (
                <tr
                  key={village._id}
                  className="border-b"
                >
                  <td className="p-4">
                    {village.name}
                  </td>

                  <td className="p-4">
                    {village.slug}
                  </td>

                  <td className="p-4">
                    {village.sortOrder}
                  </td>

                  <td className="p-4">
                    {village.isPublished
                      ? "Published"
                      : "Draft"}
                  </td>

                  <td className="p-4 space-x-4">
                    <Link
                      to={`/admin/success-story-villages/${village._id}`}
                      className="text-blue-600"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        handleDelete(
                          village._id
                        )
                      }
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default SuccessStoryVillagesPage;