export const categoryMarkerStyles = {
  education: {
    label: "Education",
    color: "#2563eb",
    bg: "bg-blue-100",
    text: "text-blue-700",
  },
  healthcare: {
    label: "Healthcare",
    color: "#dc2626",
    bg: "bg-red-100",
    text: "text-red-700",
  },
  government: {
    label: "Government",
    color: "#f97316",
    bg: "bg-orange-100",
    text: "text-orange-700",
  },
  religious: {
    label: "Religious",
    color: "#9333ea",
    bg: "bg-purple-100",
    text: "text-purple-700",
  },
  community: {
    label: "Community",
    color: "#16a34a",
    bg: "bg-green-100",
    text: "text-green-700",
  },
  banking: {
    label: "Banking",
    color: "#ca8a04",
    bg: "bg-yellow-100",
    text: "text-yellow-700",
  },
  bank: {
    label: "Banking",
    color: "#ca8a04",
    bg: "bg-yellow-100",
    text: "text-yellow-700",
  },
  police: {
    label: "Police",
    color: "#dc2626",
    bg: "bg-red-100",
    text: "text-red-700",
  },
  transport: {
    label: "Transport",
    color: "#0d9488",
    bg: "bg-teal-100",
    text: "text-teal-700",
  },
  market: {
    label: "Market",
    color: "#65a30d",
    bg: "bg-lime-100",
    text: "text-lime-700",
  },
  water: {
    label: "Water",
    color: "#0891b2",
    bg: "bg-cyan-100",
    text: "text-cyan-700",
  },
  other: {
    label: "Other",
    color: "#64748b",
    bg: "bg-slate-100",
    text: "text-slate-700",
  },
};

export const villageMarkerStyle = {
  label: "Village Location",
  color: "#dc2626",
  bg: "bg-red-100",
  text: "text-red-700",
};

export const normalizeFacilityCategory = (category) => {
  const normalized = String(category || "other")
    .trim()
    .toLowerCase();

  return categoryMarkerStyles[normalized]
    ? normalized
    : "other";
};

export const getFacilityMarkerStyle = (category) =>
  categoryMarkerStyles[
    normalizeFacilityCategory(category)
  ];
