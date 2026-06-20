import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  getPageById,
  updatePage,
} from "../services/page.service";

const PageEditPage = () => {
  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({
      title: "",
      status: "",
      isVisible: true,
    });

  useEffect(() => {
    const loadPage =
      async () => {
        const page =
          await getPageById(id);

        setForm({
          title:
            page.title,
          status:
            page.status,
          isVisible:
            page.isVisible,
        });
      };

    loadPage();
  }, [id]);

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      await updatePage(
        id,
        form
      );

      navigate(
        "/admin/pages"
      );
    };

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Edit Page
      </h1>

      <form
        onSubmit={
          handleSubmit
        }
        className="space-y-4 max-w-xl"
      >

        <input
          type="text"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title:
                e.target.value,
            })
          }
          className="w-full border p-3"
        />

        <select
          value={form.status}
          onChange={(e) =>
            setForm({
              ...form,
              status:
                e.target.value,
            })
          }
          className="w-full border p-3"
        >
          <option>
            PUBLISHED
          </option>

          <option>
            DRAFT
          </option>
        </select>

        <label className="flex gap-2">

          <input
            type="checkbox"
            checked={
              form.isVisible
            }
            onChange={(e) =>
              setForm({
                ...form,
                isVisible:
                  e.target.checked,
              })
            }
          />

          Visible

        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Save Changes
        </button>

      </form>

    </div>
  );
};

export default PageEditPage;