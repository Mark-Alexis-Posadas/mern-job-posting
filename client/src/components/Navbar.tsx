import { FC } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Navbar: FC = () => {
  return (
    <nav className="p-5 border-b border-slate-300">
      <ul className="flex items-center justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="mr-auto ml-5">
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
