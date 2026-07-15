import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-12 flex items-center justify-center gap-2">

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`h-10 w-10 rounded-lg font-semibold transition ${
            page === currentPage
              ? "bg-blue-600 text-white"
              : "border border-slate-300 bg-white hover:bg-slate-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
        <ChevronRight size={18} />
      </button>

    </div>
  );
};

export default Pagination;