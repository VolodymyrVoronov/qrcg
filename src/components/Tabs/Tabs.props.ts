import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ITab {
  tabId: string;
  tabName: string;
  iconSrc: string;
  render: () => JSX.Element;
}

export interface ITabsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tabs: ITab[];
}
