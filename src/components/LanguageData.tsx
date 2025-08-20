"use client";
import useCSVData from "@/utils/useCSVData";
import useCodebook from "@/utils/useCodebook";

interface LanguageFilterProps {
  languageCode?: string;
}

interface DataRow {
  [key: string]: string | number | undefined;
}

interface LookupTable {
  [key: string]: {
    [value: string]: string;
  };
}

export default function LanguageFilter({
  languageCode = "",
}: LanguageFilterProps) {
  const { data, loading, error } = useCSVData("/data/CHM2022.csv") as {
    data: DataRow[];
    loading: boolean;
    error: Error | null;
  };
  const {
    lookup,
    loading: codebookLoading,
    error: codebookError,
  } = useCodebook("/data/CHM Codebook.xls") as {
    lookup: LookupTable;
    loading: boolean;
    error: Error | null;
  };

  if (loading || codebookLoading) return <p>Loading...</p>;
  if (error || codebookError) {
    const errorMessage =
      (error as unknown as Error)?.message ||
      (codebookError as unknown as Error)?.message ||
      "An error occurred";
    return <p>Error: {errorMessage}</p>;
  }

  const decode = (row: DataRow): DataRow => {
    const decoded: DataRow = {};
    for (const key in row) {
      const val = row[key];
      decoded[key] = lookup[key]?.[String(val)] || val;
    }
    return decoded;
  };

  const filtered = (data as DataRow[]).filter(
    (row) => row.Language === languageCode,
  );

  return (
    <>
      <p className="text-xl">
        Decoded Entries for Language Code: {languageCode}
      </p>
      <p>Showing {filtered.length} entries</p>
      <ul>
        {filtered.slice(0, 1000).map((row, i) => {
          const decoded = decode(row);
          return (
            <li key={i}>
              {decoded.City || "Unknown City"} — {decoded.Language}
            </li>
          );
        })}
      </ul>
    </>
  );
}
