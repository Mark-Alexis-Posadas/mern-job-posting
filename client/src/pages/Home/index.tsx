import { FC, useEffect, useState } from "react";
import { JobItem } from "../../components/JobItem";
import { Item } from "../../types/jobItem";

export const Home: FC = () => {
  const [jobData, setJobData] = useState<Item[]>([]);

  const fetchJobs = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/jobs/all-jobs");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: Item[] = await response.json();
      console.log(data);
      setJobData(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="p-20 flex flex-wrap">
      {jobData.map((item) => (
        <JobItem item={item} key={item._id} />
      ))}
    </div>
  );
};
