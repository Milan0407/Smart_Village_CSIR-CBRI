import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function SmartVillageMegaMenu({
  states = [],
  loadVillages,
}) {
  const [activeState, setActiveState] = useState(null);
  const [currentVillages, setCurrentVillages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleStateHover = async (state) => {
    // Prevent unnecessary refetches
    if (activeState === state.slug) return;

    setActiveState(state.slug);
    setLoading(true);

    try {
      const villages = await loadVillages(state.slug);
      setCurrentVillages(villages || []);
    } catch (error) {
      console.error("Failed to load villages:", error);
      setCurrentVillages([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        absolute
        top-full
        left-0
        hidden
        group-hover:flex
        bg-white
        border
        border-slate-200
        rounded-xl
        shadow-xl
        overflow-hidden
        min-w-[650px]
        z-50
      "
    >
      {/* ================= STATES ================= */}

      <div className="w-64 border-r bg-slate-50">
        {states.map((state) => (
          <button
            key={state._id}
            type="button"
            onMouseEnter={() => handleStateHover(state)}
            className={`
              w-full
              flex
              items-center
              justify-between
              px-5
              py-3
              text-left
              transition
              hover:bg-white

              ${
                activeState === state.slug
                  ? "bg-white font-semibold text-blue-700"
                  : ""
              }
            `}
          >
            <span>{state.name}</span>

            <ChevronRight size={16} />
          </button>
        ))}
      </div>

      {/* ================= VILLAGES ================= */}

      <div className="w-80 bg-white">
        {!activeState && (
          <div className="p-8 text-slate-500">
            Select a state
          </div>
        )}

        {loading && (
          <div className="p-8 text-slate-500">
            Loading villages...
          </div>
        )}

        {!loading &&
          currentVillages.map((village) => (
            <Link
              key={village._id}
              to={`/village/${village.slug}`}
              className="block px-5 py-3 transition hover:bg-slate-100"
            >
              {village.name?.en ||
                village.name?.regional ||
                village.name ||
                "Unnamed Village"}
            </Link>
          ))}

        {!loading &&
          activeState &&
          currentVillages.length === 0 && (
            <div className="p-8 text-slate-500">
              No villages available.
            </div>
          )}
      </div>
    </div>
  );
}