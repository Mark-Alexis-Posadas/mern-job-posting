import { useState, useEffect } from "react";
import { Item } from "../types/jobItem";
export const useFetch = (url: string) => {
  const [jobData, setJobData] = useState<Item[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: Item[] = await response.json();
      setJobData(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { jobData };
};
