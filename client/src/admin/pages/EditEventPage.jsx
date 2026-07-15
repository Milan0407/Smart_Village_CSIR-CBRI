import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import EventForm from "../components/events/EventForm";
import { getEventById, updateEvent } from "../services/event.service";
import { mapEventToForm } from "../utils/eventMapper";

const EditEventPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    try {
      setLoading(true);

      const event = await getEventById(id);

      setInitialValues(mapEventToForm(event));
    } catch (error) {
      console.error(error);
      toast.error("Failed to load event.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (payload) => {
    try {
      await updateEvent(id, payload);

      toast.success("Event updated successfully.");

      navigate("/admin/events");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update event.");
    }
  };

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-10 text-center">
        Loading event...
      </div>
    );
  }

  if (!initialValues) {
    return (
      <div className="rounded-xl bg-red-50 p-10 text-center text-red-600">
        Event not found.
      </div>
    );
  }

  return (
    <EventForm
      defaultValues={initialValues}
      onSubmit={handleSubmit}
      isEdit
    />
  );
};

export default EditEventPage;