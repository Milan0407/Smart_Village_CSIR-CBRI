export const normalizeDisplayList = (value) => {
  const values = Array.isArray(value)
    ? value
    : [value];

  return values
    .flatMap((item) =>
      String(item || "")
        .replace(/\r\n/g, "\n")
        .replace(/\r/g, "\n")
        .split(/\s*(?:\n|(?=\d+[\).]\s*)|(?=\u2022\s*)|(?=-\s+))\s*/)
    )
    .map((item) =>
      item
        .replace(/^\d+[\).]\s*/, "")
        .replace(/^[\u2022-]\s*/, "")
        .trim()
    )
    .filter(Boolean);
};
