import { FC, useState, useEffect } from "react";
import { JobItem } from "../../components/JobItem";
import { Item } from "../../types/jobItem";
import { Link } from "react-router-dom";
import { Section } from "../../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const Home: FC = () => {
  const [jobData, setJobData] = useState<Item[]>([]);
  const [filterData, setFilterData] = useState<Item[]>([]);
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchResult = jobData.filter(
      (item) =>
        item.position.toLowerCase().includes(search.toLowerCase()) ||
        item.company.toLowerCase().includes(search.toLowerCase())
    );

    setFilterData(searchResult);
  };

  const fetchJobs = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/jobs/all-jobs");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: Item[] = await response.json();

      setJobData(data);
      setFilterData(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Section>
      <div className="flex items-center justify-center w-full">
        <form
          className="flex items-center justify-between gap-3 p-3 border border-slate-300 rounded mb-5 w-[1120px] bg-slate-50 shadow-md"
          onSubmit={handleSearchSubmit}
        >
          <div className="w-full relative flex items-center gap-3">
            <FontAwesomeIcon icon={faSearch} />
            <input
              onChange={handleSearch}
              value={search}
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
          <button
            type="submit"
            className="w-[200px] p-2 rounded text-white bg-blue-500"
          >
            Find jobs
          </button>
        </form>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {filterData.map((item) => (
          <Link to={`/job/${item._id}`} key={item._id}>
            <JobItem item={item} />
          </Link>
        ))}
      </div>
    </Section>
  );
};
