import { SetStateAction } from "react";

export type LinkInfo = {
  link: string;
  title: string;
};

export type CategoryLinkInfo = {
  link: string;
  title: string;
  childLinks?: LinkInfo[];
  setShowState?: React.Dispatch<React.SetStateAction<boolean>>;
  setChildLinks?: React.Dispatch<React.SetStateAction<LinkInfo[] | null>>;
  setSideShowState?: React.Dispatch<React.SetStateAction<boolean>>;
  isSideNavbar?: boolean;
};
