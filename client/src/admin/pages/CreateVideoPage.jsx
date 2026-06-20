import {
  useNavigate,
} from "react-router-dom";

import VideoForm
  from "../components/videos/VideoForm";

import {
  createVideo,
} from "../services/video.service";

const CreateVideoPage =
  () => {

    const navigate =
      useNavigate();

    const handleSubmit =
      async (
        data
      ) => {

        try {

          await createVideo(
            data
          );

          alert(
            "Video created successfully"
          );

          navigate(
            "/admin/videos"
          );

        } catch (error) {

  console.error(
    error.response?.data
  );

  alert(
    JSON.stringify(
      error.response?.data
    )
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
          Create Video
        </h1>

        <VideoForm
          onSubmit={
            handleSubmit
          }
        />

      </div>

    );
  };

export default CreateVideoPage;