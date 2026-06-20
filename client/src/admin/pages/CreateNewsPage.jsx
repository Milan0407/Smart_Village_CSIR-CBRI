import { useNavigate }
  from "react-router-dom";

import NewsForm
  from "../components/news/NewsForm";

import {
  createNews,
} from "../services/news.service";

const CreateNewsPage =
  () => {
    const navigate =
      useNavigate();

    const handleCreate =
      async (data) => {
        await createNews(
          data
        );

        navigate(
          "/admin/news"
        );
      };

    return (
      <div>

        <h1 className="text-4xl font-bold mb-8">
          Create News
        </h1>

        <NewsForm
          initialValues={{
            title: "",
            slug: "",
            featuredImage: "",
            summary: "",
            content: "",
          }}
          onSubmit={
            handleCreate
          }
        />

      </div>
    );
  };

export default CreateNewsPage;