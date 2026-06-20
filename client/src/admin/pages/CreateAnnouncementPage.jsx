import { useNavigate } from "react-router-dom";

import AnnouncementForm from "../components/announcements/AnnouncementForm";

import {
  createAnnouncement,
} from "../services/announcement.service";

const CreateAnnouncementPage = () => {
  const navigate =
    useNavigate();

  const handleSubmit =
    async (data) => {
      try {
        await createAnnouncement(
          data
        );

        alert(
          "Announcement created successfully"
        );

        navigate(
          "/admin/announcements"
        );
      } catch (error) {
        console.error(
          error
        );

        alert(
          error.response?.data
            ?.error?.message ||
            "Failed to create announcement"
        );
      }
    };

  return (
    <div className="p-6">

      <h1
        className="
          text-3xl
          font-bold
          mb-6
        "
      >
        Create Announcement
      </h1>

      <AnnouncementForm
        onSubmit={
          handleSubmit
        }
      />

    </div>
  );
};

export default CreateAnnouncementPage;