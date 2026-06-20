import {
  useEffect,
  useState,
} from "react";

import { Link }
  from "react-router-dom";

import {
  getAllNavigation,
  deleteNavigation,
} from "../services/navigation.service";

const NavigationPage = () => {
  const [items,
    setItems] =
    useState([]);

  const loadNavigation =
    async () => {
      const data =
        await getAllNavigation();

      setItems(data);
    };

  useEffect(() => {
    loadNavigation();
  }, []);

  const handleDelete =
    async (id) => {
      const confirmed =
        window.confirm(
          "Delete this menu item?"
        );

      if (!confirmed) {
        return;
      }

      await deleteNavigation(
        id
      );

      loadNavigation();
    };

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Navigation Management
        </h1>

        <Link
          to="/admin/navigation/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Menu Item
        </Link>

      </div>

      <div className="bg-white rounded-xl shadow">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-4 text-left">
                Label
              </th>

              <th className="p-4 text-left">
                Path
              </th>

              <th className="p-4 text-left">
                Order
              </th>

              <th className="p-4 text-left">
                Visible
              </th>

              <th className="p-4 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {items.map(
              (item) => (
                <tr
                  key={item._id}
                  className="border-b"
                >

                  <td className="p-4">
                    {item.label}
                  </td>

                  <td className="p-4">
                    {item.path}
                  </td>

                  <td className="p-4">
                    {item.order}
                  </td>

                  <td className="p-4">
                    {item.isVisible
                      ? "Yes"
                      : "No"}
                  </td>

                  <td className="p-4 space-x-4">

                    <Link
                      to={`/admin/navigation/${item._id}`}
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

export default NavigationPage;