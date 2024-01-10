import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className=" bg-blue-500 rounded-md bg-yellow px-10 py-2  font-ptsans  text-black shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)]
        shadow-yellow  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 
         hover:text-black hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] hover:shadow-blue"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
