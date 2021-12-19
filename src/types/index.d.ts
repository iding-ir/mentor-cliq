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
  icon: JSX.Element;
}

export interface IRoutes {
  [key: string]: IRoute;
}

export interface Styles {
  [key: string]: SxProps<Theme>;
}

export interface ISignIn {
  email: string | null;
  password: string | null;
}

export interface ISignUp {
  email: string;
  password: string;
  rePassword: string;
}

export interface IEmployee {
  firstName: string;
  lastName: string;
  email: string;
  gender: "male" | "female" | "n/a";
  department: string;
  jobTitle: string;
  country: string;
  city: string;
  [keys: string]: any;
}
