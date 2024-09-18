import { FC, useEffect, useState } from "react";
import { JobItem } from "../../components/JobItem";
import { Item } from "../../types/jobItem";
import { Link } from "react-router-dom";
import { Section } from "../../components/Section";

export const Home: FC = () => {
  const [jobData, setJobData] = useState<Item[]>([]);

  const fetchJobs = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/jobs/all-jobs");

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
    fetchJobs();
  }, []);

  return (
    <Section>
      <div className="flex flex-wrap gap-4">
        {jobData.map((item) => (
          <Link to={`/job/${item._id}`} key={item._id}>
            <JobItem item={item} />
          </Link>
        ))}
      </div>
    </Section>
  );
};
