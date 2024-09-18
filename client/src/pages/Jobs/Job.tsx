import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../types/jobItem";

export const Job: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [jobData, setJobData] = useState<Item | null>(null);

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/jobs/get-single-job/${id}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: Item = await response.json(); // Expecting a single job object
      setJobData(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      {jobData ? (
        <>
          <h1 className="font-bold text-4xl">{jobData.position}</h1>
          <p>{jobData.company}</p>
          <p>{jobData.location}</p>
          <div>
            <h3 className="text-sm font-bold text-gray-600 mb-3">Skills</h3>
            <div className="flex items-center gap-4">
              {jobData.languages.map((lang, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-600 mb-3">
              Full job description
            </h3>
            <h3 className="text-sm font-bold text-gray-600 mb-3">
              Company Overview
            </h3>
            <h3 className="text-sm font-bold text-gray-600 mb-3">
              Position Overview
            </h3>
            <h3 className="text-sm font-bold text-gray-600 mb-3">
              Key Responsibilities
            </h3>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
