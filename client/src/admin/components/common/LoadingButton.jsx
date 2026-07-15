import { Loader2 } from "lucide-react";

const LoadingButton = ({
  loading = false,
  children,
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        transition
        disabled:cursor-not-allowed
        disabled:opacity-70
        ${className}
      `}
    >
      {loading && (
        <Loader2
          size={18}
          className="animate-spin"
        />
      )}

      {children}
    </button>
  );
};

export default LoadingButton;