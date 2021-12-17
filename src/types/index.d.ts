import { ReactElement, JSXElementConstructor } from "react";
import { SxProps, Theme } from "@mui/material/styles";

export interface IRoute {
  key: string;
  path: string;
  element: ReactElement<any, string | JSXElementConstructor<any>>;
  navbar: boolean;
  showPrivate: boolean;
  showPublic: boolean;
  title?: string;
}

export interface IRoutes {
  [key: string]: IRoute;
}

export interface Styles {
  [key: string]: SxProps<Theme>;
}
