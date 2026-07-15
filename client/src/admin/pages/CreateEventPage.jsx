import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import EventForm from "../components/events/EventForm";

const CreateEventPage = () => {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <Link
              to="/admin/events"
              className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100"
            >
              <ArrowLeft size={18} />
            </Link>

            <div>

              <h1 className="text-3xl font-bold text-slate-900">
                Create Event
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Create a new event or achievement for a village.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Form */}

      <EventForm />

    </div>
  );
};

export default CreateEventPage;