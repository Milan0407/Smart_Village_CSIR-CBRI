import { useFormContext } from "react-hook-form";

const CheckboxField = ({
  name,
  label,
  description,
  disabled = false,
}) => {
  const { register } = useFormContext();

  return (
    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
      <div>
        <h4 className="font-medium text-slate-800">
          {label}
        </h4>

        {description && (
          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        )}
      </div>

      <input
        type="checkbox"
        disabled={disabled}
        {...register(name)}
        className="h-5 w-5 accent-blue-600"
      />
    </label>
  );
};

export default CheckboxField;