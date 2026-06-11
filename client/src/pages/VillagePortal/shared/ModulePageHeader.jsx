const ModulePageHeader = ({
  title,
  description,
  badge,
}) => {
  return (
    <div className="border-b pb-5 mb-8">
      {badge && (
        <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-3 py-1 text-sm font-medium mb-3">
          {badge}
        </span>
      )}

      <h1 className="text-4xl font-bold text-slate-900">
        {title}
      </h1>

      {description && (
        <p className="mt-3 text-slate-600 max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default ModulePageHeader;