import {
  useEffect,
  useState,
} from "react";

import {
  getSectionsByPage,
  updateSection,
} from "../services/sectionManagement.service";

const HOME_PAGE_ID =
  "6a2fd2ad6ea52761ac32ca8a";

const HomeSectionsPage =
  () => {
    const [
      sections,
      setSections,
    ] = useState([]);

    useEffect(() => {
      loadSections();
    }, []);

    const loadSections =
      async () => {
        try {
          const data =
            await getSectionsByPage(
              HOME_PAGE_ID
            );

          setSections(data);
        } catch (error) {
          console.error(error);
        }
      };

    const handleOrderChange =
      (
        id,
        value
      ) => {
        setSections(
          sections.map(
            (section) =>
              section._id ===
              id
                ? {
                    ...section,
                    order:
                      Number(
                        value
                      ),
                  }
                : section
          )
        );
      };

    const saveChanges =
      async () => {
        try {
          await Promise.all(
            sections.map(
              (
                section
              ) =>
                updateSection(
                  section._id,
                  {
                    order:
                      section.order,
                    isVisible:
                      section.isVisible,
                  }
                )
            )
          );

          alert(
            "Sections updated successfully"
          );
        } catch (
          error
        ) {
          console.error(
            error
          );
        }
      };

    return (
      <div>

        <h1
          className="
            text-3xl
            font-bold
            mb-8
          "
        >
          Home Sections
        </h1>

        <div
          className="
            bg-white
            rounded-xl
            shadow
            overflow-hidden
          "
        >
          <table className="w-full">

            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left">
                  Section
                </th>

                <th className="p-4 text-left">
                  Order
                </th>
              </tr>
            </thead>

            <tbody>

              {sections.map(
                (
                  section
                ) => (
                  <tr
                    key={
                      section._id
                    }
                    className="border-t"
                  >
                    <td className="p-4">
                      {
                        section.sectionType
                      }
                    </td>

                    <td className="p-4">
                      <input
                        type="number"
                        value={
                          section.order
                        }
                        onChange={(
                          e
                        ) =>
                          handleOrderChange(
                            section._id,
                            e
                              .target
                              .value
                          )
                        }
                        className="
                          border
                          rounded-lg
                          px-3
                          py-2
                          w-24
                        "
                      />
                    </td>
                  </tr>
                )
              )}

            </tbody>

          </table>
        </div>

        <button
          onClick={
            saveChanges
          }
          className="
            mt-6
            px-6
            py-3
            bg-blue-600
            text-white
            rounded-lg
          "
        >
          Save Changes
        </button>

      </div>
    );
  };

export default HomeSectionsPage;