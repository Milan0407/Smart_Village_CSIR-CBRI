/*
|--------------------------------------------------------------------------
| Currency Formatter
|--------------------------------------------------------------------------
*/

export const formatCurrency = (amount) => {
  if (amount === null || amount === undefined) return "-";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

/*
|--------------------------------------------------------------------------
| Date Formatter
|--------------------------------------------------------------------------
*/

export const formatDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

/*
|--------------------------------------------------------------------------
| Status Formatter
|--------------------------------------------------------------------------
*/

export const formatStatus = (status) => {
  if (!status) return "-";

  return status.replaceAll("_", " ");
};