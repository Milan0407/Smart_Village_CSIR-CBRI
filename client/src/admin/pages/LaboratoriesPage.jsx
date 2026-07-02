import {
  useEffect,
  useState,
} from "react";

import { Link }
  from "react-router-dom";

import {
  getAllLaboratories,
  deleteLaboratory,
} from "../services/laboratory.service";

const LaboratoriesPage =
  () => {

    const [
      laboratories,
      setLaboratories,
    ] = useState([]);

    const loadLabs =
      async () => {
        const data =
          await getAllLaboratories();

        setLaboratories(
          data
        );
      };

    useEffect(() => {
      loadLabs();
    }, []);

    const handleDelete =
      async (id) => {

        const confirmed =
          window.confirm(
            "Delete laboratory?"
          );

        if (!confirmed)
          return;

        await deleteLaboratory(
          id
        );

        loadLabs();
      };

    return (
      <div>

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            Laboratories
          </h1>

          <Link
            to="/admin/laboratories/create"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Laboratory
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
                  Type
                </th>

                <th className="p-4 text-left">
                  Director
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

              {laboratories.map(
                (lab) => (
                  <tr
                    key={lab._id}
                    className="border-b"
                  >

                    <td className="p-4">
                      {lab.name}
                    </td>

                    <td className="p-4">
                      {lab.type}
                    </td>

                    <td className="p-4">
                      {lab.directorName}
                    </td>

                    <td>
  {lab.isPublished
    ? "Published"
    : "Draft"}
</td>

                    <td className="p-4 space-x-4">

                      <Link
                        to={`/admin/laboratories/${lab._id}`}
                        className="text-blue-600"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(
                            lab._id
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

export default LaboratoriesPage;    