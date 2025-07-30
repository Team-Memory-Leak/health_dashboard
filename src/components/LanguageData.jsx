"use client";
import useCSVData from "@/utils/useCSVData";
import useCodebook from "@/utils/useCodebook";

export default function LanguageFilter({ languageCode = "" }) {
  const { data, loading, error } = useCSVData("/data/CHM2022.csv");
  const { lookup, loading: codebookLoading, error: codebookError } = useCodebook("/data/CHM Codebook.xls");

  if (loading || codebookLoading) return <p>Loading...</p>;
  if (error || codebookError) return <p>Error: {error?.message || codebookError?.message}</p>;

  // Decode a single survey row
  const decode = (row) => {
    const decoded = {};
    for (const key in row) {
      const val = row[key];
      decoded[key] = lookup[key]?.[val] || val;
    }
    return decoded;
  };

  const filtered = data.filter((row) => row.Language === languageCode);

  return (
    <div>
      <p className="text-xl">Decoded Entries for Language Code: {languageCode}</p>
      <p>Showing {filtered.length} entries</p>
      <ul>
        {filtered.slice(0, 1000).map((row, i) => {
          const decoded = decode(row);
          return <li key={i}>{decoded.City === "9" ? "Palm Desert" : "Unknown City"} — {decoded.Language}</li>;
        })}
      </ul>
    </div>
  );
}
