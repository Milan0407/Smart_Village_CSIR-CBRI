import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  getSectionsByPage,
} from "../services/section.service";

const PageSectionsPage = () => {
  const { pageId } =
    useParams();

  const [sections, setSections] =
    useState([]);

  useEffect(() => {
    const loadSections =
      async () => {
        const data =
          await getSectionsByPage(
            pageId
          );

        setSections(data);
      };

    loadSections();
  }, [pageId]);

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Page Sections
      </h1>

      <div className="bg-white rounded-xl shadow">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-4 text-left">
                Type
              </th>

              <th className="p-4 text-left">
                Title
              </th>

              <th className="p-4 text-left">
                Order
              </th>

              <th className="p-4 text-left">
                Visible
              </th>

              <th className="p-4 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {sections.map(
              (section) => (
                <tr
                  key={
                    section._id
                  }
                  className="border-b"
                >

                  <td className="p-4">
                    {
                      section.sectionType
                    }
                  </td>

                  <td className="p-4">
                    {
                      section.title
                    }
                  </td>

                  <td className="p-4">
                    {
                      section.order
                    }
                  </td>

                  <td className="p-4">
                    {section.isVisible
                      ? "Yes"
                      : "No"}
                  </td>

                  <td className="p-4">
                    <Link
                      to={`/admin/sections/${section._id}`}
                      className="text-blue-600"
                    >
                      Edit
                    </Link>
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

export default PageSectionsPage;