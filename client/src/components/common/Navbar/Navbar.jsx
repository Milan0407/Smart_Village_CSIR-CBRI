import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Link } from "react-router-dom";

import useNavigation from "../../../hooks/useNavigation";

import useStates from "../../../hooks/useStates";
import SmartVillageMegaMenu from "./SmartVillageMegaMenu";

const Navbar = () => {
  const { items, loading } = useNavigation();

  const {
  states,
  villages,
  loadVillages,
} = useStates();

  const [mobileOpen, setMobileOpen] = useState(false);

  if (loading) {
    return null;
  }

  const parentItems = items.filter(
    (item) => !item.parentId
  );

  const getChildren = (parentId) =>
    items.filter(
      (item) => item.parentId === parentId
    );

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="relative h-16 lg:h-20 flex items-center justify-center">

          {/* Desktop Menu */}
          <nav className="hidden lg:flex justify-center">
            <ul className="flex items-center gap-8 font-medium text-slate-700">

              {parentItems.map((item) => {
                const children = getChildren(item._id);

                return (
                  <li
                    key={item._id}
                    className="relative group"
                  >
{item.label === "CSIR Smart Village" ? (
  <>
    <button
      type="button"
      className="
        hover:text-blue-900
        transition-colors
      "
    >
      {item.label}
    </button>

    <SmartVillageMegaMenu
      states={states}
      villages={villages}
      loadVillages={loadVillages}
    />
  </>
) : (
  <Link
    to={item.path}
    className="hover:text-blue-900 transition-colors"
  >
    {item.label}
  </Link>
)}

                    {children.length > 0 && (
                      <ul
                        className="
                          absolute
                          left-0
                          top-full
                          hidden
                          group-hover:block
                          bg-white
                          border
                          rounded-lg
                          shadow-lg
                          min-w-[250px]
                          py-2
                          z-50
                        "
                      >
                        {children.map((child) => (
                          <li key={child._id}>
                            <Link
                              to={child.path}
                              className="
                                block
                                px-4
                                py-2
                                hover:bg-slate-100
                              "
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}

              <li>
                <button className="flex items-center gap-2 hover:text-blue-900 transition-colors">
                  <Languages size={18} />
                  Language
                </button>
              </li>

            </ul>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="
              lg:hidden
              absolute
              right-4
              p-2
              rounded-md
              hover:bg-slate-100
            "
          >
            {mobileOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-4">
            <ul className="space-y-1">

              {parentItems.map((item) => (
                <li key={item._id}>
                  <Link
                    to={item.path}
                    onClick={() =>
                      setMobileOpen(false)
                    }
                    className="
                      block
                      py-3
                      px-3
                      rounded-lg
                      hover:bg-slate-100
                      text-slate-700
                      font-medium
                    "
                  >
                    {item.label}
                  </Link>

                  {getChildren(item._id).map(
                    (child) => (
                      <Link
                        key={child._id}
                        to={child.path}
                        className="
                          block
                          ml-6
                          py-2
                          px-3
                          text-sm
                          text-slate-600
                        "
                        onClick={() =>
                          setMobileOpen(false)
                        }
                      >
                        {child.label}
                      </Link>
                    )
                  )}
                </li>
              ))}

              <li>
                <button className="w-full flex items-center gap-2 py-3 px-3 rounded-lg hover:bg-slate-100 text-slate-700 font-medium">
                  <Languages size={18} />
                  Language
                </button>
              </li>

            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;