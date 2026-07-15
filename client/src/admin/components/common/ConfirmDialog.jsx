import LoadingButton from "./LoadingButton";

const ConfirmDialog = ({
  open,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  loading = false,
  onCancel,
  onConfirm,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

        <h2 className="text-xl font-bold text-slate-800">
          {title}
        </h2>

        <p className="mt-3 text-slate-600">
          {message}
        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onCancel}
            disabled={loading}
            className="rounded-xl border border-slate-300 px-5 py-2.5"
          >
            {cancelText}
          </button>

          <LoadingButton
            loading={loading}
            onClick={onConfirm}
            className="bg-red-600 px-5 py-2.5 text-white hover:bg-red-700"
          >
            {confirmText}
          </LoadingButton>

        </div>

      </div>

    </div>
  );
};

export default ConfirmDialog;