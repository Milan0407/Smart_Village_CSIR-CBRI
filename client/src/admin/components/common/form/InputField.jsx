import { useFormContext } from "react-hook-form";

const InputField = ({
  name,
  label,
  type = "text",
  placeholder = "",
  required = false,
  disabled = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
        className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
          error
            ? "border-red-500 focus:ring-red-100"
            : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        }`}
      />

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default InputField;