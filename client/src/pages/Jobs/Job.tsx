import { FC } from "react";
import { useParams } from "react-router-dom";

export const Job: FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract 'id' from the URL

  return (
    <div>
      <h2>Job Details</h2>
      <p>Job ID: {id}</p>
      {/* Fetch and display job details using the `id` */}
    </div>
  );
};
