import { useState } from "react";

import EmptyState from "./EmptyState";
import PolicyCard from "./PolicyCard";

const PolicySection = ({
  title,
  schemes = [],
}) => {
  const [openSchemeId, setOpenSchemeId] =
    useState(null);

  return (
    <section className="space-y-5">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-2xl font-bold text-slate-900">
          {title}
        </h2>
      </div>

      {schemes.length === 0 ? (
        <EmptyState
          title={`No ${title} Found`}
          description="Schemes will appear here once they are published for this village."
        />
      ) : (
        <div className="mx-auto max-w-[1000px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {schemes.map((scheme) => (
            <PolicyCard
              key={scheme._id}
              scheme={scheme}
              isOpen={openSchemeId === scheme._id}
              onToggle={() =>
                setOpenSchemeId((current) =>
                  current === scheme._id
                    ? null
                    : scheme._id
                )
              }
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PolicySection;
