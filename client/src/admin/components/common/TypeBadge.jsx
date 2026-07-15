const TypeBadge = ({
  type,
}) => {
  const styles = {
    EVENT:
      "bg-blue-100 text-blue-700",

    ACHIEVEMENT:
      "bg-purple-100 text-purple-700",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        ${
          styles[type] ||
          "bg-slate-100 text-slate-700"
        }
      `}
    >
      {type}
    </span>
  );
};

export default TypeBadge;