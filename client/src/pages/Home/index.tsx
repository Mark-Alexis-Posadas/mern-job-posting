import { FC } from "react";
import { useFetch } from "../../hooks/useFetch";

import { JobItem } from "../../components/JobItem";
import { Item } from "../../types/jobItem";
import { Link } from "react-router-dom";
import { Section } from "../../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const Home: FC = () => {
  // const [jobData, setJobData] = useState<Item[]>([]);
  const { jobData } = useFetch("http://localhost:4000/api/jobs/all-jobs");

  // const fetchJobs = async () => {
  //   try {
  //     const response = await fetch("http://localhost:4000/api/jobs/all-jobs");

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data: Item[] = await response.json();

  //     setJobData(data);
  //   } catch (error) {
  //     console.error("There was a problem with the fetch operation:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchJobs();
  // }, []);

  return (
    <Section>
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-between gap-3 p-3 border border-slate-300 rounded mb-5 w-[1120px] bg-slate-50 shadow-md">
          <div className="w-full relative flex items-center gap-3">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              className="w-full bg-transparent outline-none"
              placeholder="Job title,keywords,or company"
            />
          </div>
          <div className="w-full relative flex items-center gap-3">
            <FontAwesomeIcon icon={faLocationDot} />
            <input
              type="text"
              className="w-full bg-transparent outline-none"
              placeholder="City,state,zip code"
            />
          </div>
          <button className="w-[200px] p-2 rounded text-white bg-blue-500">
            Find jobs
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {jobData.map((item) => (
          <Link to={`/job/${item._id}`} key={item._id}>
            <JobItem item={item} />
          </Link>
        ))}
      </div>
    </Section>
  );
};
