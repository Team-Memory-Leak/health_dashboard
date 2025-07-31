"use client";
import useCSVData from "@/utils/useCSVData";
import useCodebook from "@/utils/useCodebook";

interface LanguageFilterProps {
  languageCode?: string;
}

interface SurveyRow {
  [key: string]: string;
}

interface DecodedRow {
  [key: string]: string;
}

interface Lookup {
  [fieldName: string]: {
    [code: string]: string;
  };
}

export default function LanguageFilter({ languageCode }: LanguageFilterProps) {
  const { data, loading, error } = useCSVData("/data/CHM2022.csv");
  const {
    lookup,
    loading: codebookLoading,
    error: codebookError,
  } = useCodebook("/data/CHM Codebook.xls");

  if (loading || codebookLoading) return <p>Loading...</p>;
  if (error || codebookError) {
    const errorMessage =
      (error as unknown as Error)?.message ||
      (codebookError as unknown as Error)?.message ||
      "An error occurred";
    return <p>Error: {errorMessage}</p>;
  }

  // Decode a single survey row
  const decode = (row: SurveyRow): DecodedRow => {
    const decoded: DecodedRow = {};
    for (const key in row) {
      const val = row[key];
      decoded[key] = (lookup as Lookup)[key]?.[val] || val;
    }
    return decoded;
  };

  const filtered = (data as SurveyRow[]).filter(
    (row) => row.Language === languageCode,
  );

  return (
    <div>
      <p className="text-xl">
        Decoded Entries for Language Code: {languageCode}
      </p>
      <p>Showing {filtered.length} entries</p>
      <ul>
        {filtered.slice(0, 1000).map((row, i) => {
          const decoded = decode(row);
          return (
            <li key={i}>
              {decoded.City === "9" ? "Palm Desert" : "Unknown City"} —{" "}
              {decoded.Language}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
