export default async function CopyrightYear() {
  "use cache";
  const year = new Date().getFullYear();
  return <>{year}</>;
}
