export default function useSiteUrl() {
  return process.env.NODE_ENV === "production"
    ? "https://www.baremetalsoftwarelimited.com"
    : "http://localhost:3000";
}
