export const getLocalizedText = (value, fallback = "") => {
  if (value === null || value === undefined) return fallback;
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);

  return (
    value.en ||
    value.regional ||
    value.hi ||
    value.default ||
    fallback
  );
};

export const getVillageName = (village, fallback = "Unknown Village") =>
  getLocalizedText(village?.name, fallback);
