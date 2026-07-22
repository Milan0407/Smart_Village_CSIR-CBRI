import EmptyState from "./EmptyState";
import PolicyCard from "./PolicyCard";

const PolicySection = ({
  title,
  schemes = [],
  onOpenScheme,
}) => {
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
        <div className="mx-auto max-w-[1000px] space-y-5">
          {schemes.map((scheme) => (
            <PolicyCard
              key={scheme._id}
              scheme={scheme}
              onOpen={() => onOpenScheme?.(scheme)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PolicySection;
