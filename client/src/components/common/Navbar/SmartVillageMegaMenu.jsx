import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function SmartVillageMegaMenu({
  states = [],
  villages = {},
  loadVillages,
}) {
  const [activeState, setActiveState] =
    useState(null);

const handleStateHover = async (state) => {
  console.log("Hovered State:", state);

  setActiveState(state.slug);

  if (!villages[state.slug]) {
    const data = await loadVillages(state.slug);

    console.log("Loaded Villages:", data);
  }

  console.log("Current Villages:", villages);
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
      {/* States */}

      <div className="w-64 border-r bg-slate-50">

        {states.map((state) => (

          <button
            key={state._id}
            onMouseEnter={() =>
              handleStateHover(state)
            }
            className={`
              w-full
              flex
              items-center
              justify-between
              px-5
              py-3
              text-left
              hover:bg-white
              transition

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

      {/* Villages */}

      <div className="w-80 bg-white">

        {!activeState && (
          <div className="p-8 text-slate-500">
            Select a state
          </div>
        )}

        {activeState &&
          (villages[
            activeState
          ] || []).map((village) => (

<Link
  key={village._id}
  to={`/village/${village.slug}`}
  className="block px-5 py-3 hover:bg-slate-100 transition"
>
  {village.name?.en || village.name?.regional || "Unnamed Village"}
</Link>

          ))}

        {activeState &&
          villages[
            activeState
          ]?.length === 0 && (
            <div className="p-8 text-slate-500">
              No villages available.
            </div>
          )}

      </div>

    </div>
  );
}