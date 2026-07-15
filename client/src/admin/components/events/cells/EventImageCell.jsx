const EventImageCell = ({ coverImage, title }) => {
  return (
    <td className="px-6 py-5 align-top">
      <div className="h-16 w-20 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
        {coverImage?.url ? (
          <img
            src={coverImage.url}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs font-medium text-slate-400">
            No Image
          </div>
        )}
      </div>
    </td>
  );
};

export default EventImageCell;