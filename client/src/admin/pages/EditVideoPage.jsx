import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import VideoForm
  from "../components/videos/VideoForm";

import {
  getVideoById,
  updateVideo,
} from "../services/video.service";

const EditVideoPage =
  () => {

    const { id } =
      useParams();

    const navigate =
      useNavigate();

    const [video,
      setVideo] =
      useState(null);

    useEffect(() => {

      const loadVideo =
        async () => {

          const data =
            await getVideoById(
              id
            );

          setVideo(
            data
          );
        };

      loadVideo();

    }, [id]);

    const handleSubmit =
      async (
        formData
      ) => {

        await updateVideo(
          id,
          formData
        );

        alert(
          "Video updated successfully"
        );

        navigate(
          "/admin/videos"
        );
      };

    if (!video) {
      return (
        <p>
          Loading...
        </p>
      );
    }

    return (

      <div>

        <h1
          className="
            text-3xl
            font-bold
            mb-8
          "
        >
          Edit Video
        </h1>

        <VideoForm
          initialData={
            video
          }
          onSubmit={
            handleSubmit
          }
        />

      </div>
    );
  };

export default EditVideoPage;