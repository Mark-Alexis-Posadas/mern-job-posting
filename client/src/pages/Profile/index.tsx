import { FC } from "react";
import { Section } from "../../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";

export const Profile: FC = () => {
  return (
    <Section>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Mark Alexis Posadas</h1>
        <p>logo</p>
      </div>
      <ul>
        <li className="text-sm text-gray-500 my-3">
          <FontAwesomeIcon className="mr-2" icon={faEnvelope} />{" "}
          markalexisposadas@gmail.com
        </li>
        <li className="text-sm text-gray-500 my-3">
          <FontAwesomeIcon className="mr-2" icon={faPhoneFlip} />
          09100740372
        </li>
        <li className="text-sm text-gray-500 my-3">
          <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
          Makati, Ph
        </li>
      </ul>
      <h2 className="font-bold">Resume</h2>
    </Section>
  );
};
