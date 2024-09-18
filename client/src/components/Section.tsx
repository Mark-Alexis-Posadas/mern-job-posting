import { FC } from "react";
interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const Section: FC<Props> = ({ children }) => {
  return <section className="p-20">{children}</section>;
};
