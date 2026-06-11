const ModuleLayout = ({ children }) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        shadow-sm
        p-8
        min-h-[700px]
      "
    >
      {children}
    </div>
  );
};

export default ModuleLayout;