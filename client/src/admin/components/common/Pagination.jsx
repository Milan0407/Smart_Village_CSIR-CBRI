import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Pagination = ({
  pagination,
  onPageChange,
}) => {
  if (!pagination) return null;

  const {
    page,
    pages,
    total,
    limit,
  } = pagination;

  if (pages <= 1) return null;

  const startItem = (page - 1) * limit + 1;
  const endItem = Math.min(
    page * limit,
    total
  );

  const pageNumbers = [];

  let startPage = Math.max(1, page - 2);
  let endPage = Math.min(
    pages,
    startPage + 4
  );

  if (endPage - startPage < 4) {
    startPage = Math.max(
      1,
      endPage - 4
    );
  }

  for (
    let i = startPage;
    i <= endPage;
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">

      {/* Results */}

      <p className="text-sm text-slate-600">
        Showing{" "}
        <span className="font-semibold text-slate-800">
          {startItem}
        </span>{" "}
        –
        <span className="font-semibold text-slate-800">
          {" "}
          {endItem}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-slate-800">
          {total}
        </span>{" "}
        results
      </p>

      {/* Controls */}

      <div className="flex items-center justify-center gap-2">

        {/* Previous */}

        <button
          type="button"
          disabled={page === 1}
          onClick={() =>
            onPageChange(page - 1)
          }
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Page Numbers */}

        {pageNumbers.map((number) => (
          <button
            key={number}
            type="button"
            onClick={() =>
              onPageChange(number)
            }
            className={`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold transition ${
              page === number
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
            }`}
          >
            {number}
          </button>
        ))}

        {/* Next */}

        <button
          type="button"
          disabled={page === pages}
          onClick={() =>
            onPageChange(page + 1)
          }
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight size={18} />
        </button>

      </div>

    </div>
  );
};

export default Pagination;