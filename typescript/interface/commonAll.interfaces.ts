/* eslint-disable no-unused-vars */

// eslint-disable-next-line mui-path-imports/mui-path-imports
import { CheckboxProps } from "@mui/material";

/* eslint-disable unused-imports/no-unused-vars */
export interface cmnformProps {
  onNextStep: (nextStepValue: number) => void;
}

export interface homeBannerProps {
  title: string;
  subTitle: string;
  bannerImg: string;
  btnText: string;
}
export interface homeBoutTxtProps {
  title: string;
  titleStrong: string;
}

export interface CustomCheckBoxProps extends CheckboxProps {
  labelText: string;
}

export interface serviceTextProps {
  title: string;
  titleStrong: string;
  subText: string;
}

export interface authProps {
  isHeaderRight?: boolean;
  headerRight?: JSX.Element;
  headingText: string;
  hasSubText?: boolean;
  subText?: string;
  children: JSX.Element;
}

export interface commonTableProps {
  tableHeadRow: any[];
  children: JSX.Element | JSX.Element[];
}
export interface cardListDashbrdProps {
  bgColor: string;
  // logoColor: string;
  title: string;
  subHeadng: string;
  IconPath: any;
}

export interface menuOpenProps {
  handelOpen: any;
}
export interface menuSidebarProps {
  menuActive: any;
  closeProps: any;
}
