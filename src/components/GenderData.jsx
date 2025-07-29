"use client";
import useCSVData from "@/utils/useCSVData";

export default function LanguageFilter({ languageCode = "2" }) {
  const { data, loading, error } = useCSVData("/data/CHM2022.csv");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Filter for rows where Gender matches the passed prop
  const filtered = data.filter((row) => row.Language === languageCode);

  return (
    <div>
      <h2>{languageCode} Data</h2>
      <p>Showing {filtered.length} entries</p>
      <ul>
        {filtered.slice(0, 10).map((row, i) => (
          <li key={i}>{JSON.stringify(row)}</li>
        ))}
      </ul>
    </div>
  );
}
