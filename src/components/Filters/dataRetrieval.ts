"use client";
import useCSVData from "@/utils/useCSVData";
import useCodebook from "@/utils/useCodebook";

interface DataRow {
  [key: string]: string | number | undefined;
}

interface LookupTable {
  [key: string]: {
    [value: string]: string;
  };
}

export function useInsuranceCount(option?: string, codeName?: string) {
  const { data, loading, error } = useCSVData("/data/CHM2022.csv") as {
    data: DataRow[];
    loading: boolean;
    error: Error | null;
  };

  const { loading: codebookLoading, error: codebookError } = useCodebook(
    "/data/CHM Codebook.xls",
  ) as {
    lookup: LookupTable;
    loading: boolean;
    error: Error | null;
  };

  if (loading || codebookLoading) {
    return { count: 0, loading: true, error: null };
  }

  if (error || codebookError) {
    return { count: 0, loading: false, error: error || codebookError };
  }

  const filtered = (data as DataRow[]).filter(
    (row) => row[codeName!] === option,
  );

  return { count: filtered.length, loading: false, error: null };
}
