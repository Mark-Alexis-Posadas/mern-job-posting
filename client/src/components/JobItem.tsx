import { FC } from "react";
import { JobItemTypes } from "../types/jobItem";

export const JobItem: FC<JobItemTypes> = ({ item }) => {
  return (
    <div
      className={`bg-white my-3 border rounded-lg p-6 shadow-md ${
        item.featured ? "border-blue-500" : "border-gray-200"
      } relative`}
    >
      <img
        src={item.logo}
        alt={`${item.company} logo`}
        className="w-12 h-12 mr-4 object-cover"
      />
      {item.isNew && (
        <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          NEW!
        </span>
      )}
      {item.featured && (
        <span className="absolute top-4 left-20 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          FEATURED
        </span>
      )}

      <div className="mt-4">
        <h2 className="text-xl font-bold">{item.position}</h2>
        <h3 className="text-lg text-gray-700">{item.company}</h3>
        <p className="text-gray-500 text-sm mt-1">
          {item.postedAt} · {item.contract} · {item.location}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.languages.map((lang) => (
            <span
              key={lang}
              className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {lang}
            </span>
          ))}
          {item.tools.map((tool) => (
            <span
              key={tool}
              className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
