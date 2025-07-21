export function formatDate(date) {
  return date.toLocalDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
