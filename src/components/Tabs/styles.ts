import { Styles } from "../../types";

export const styles: Styles = {
  link: {
    textOverflow: "unset",
    flexShrink: "0",
    display: "flex",
    margin: "0 0.5rem",
    a: {
      padding: "0 1rem",
      color: (theme) => theme.palette.primary.main,
      textDecoration: "none",
      fontSize: "1rem",
      "&.is-selected": {
        color: (theme) => theme.palette.secondary.main,
      },
    },
  },
};
