import { amber } from "@mui/material/colors";

import { Styles } from "../../types";

export const styles: Styles = {
  link: {
    textOverflow: "unset",
    flexShrink: "0",
    display: "flex",
    margin: "0 0.5rem",
    a: {
      padding: "0 1rem",
      color: (theme) => theme.palette.grey[50],
      textDecoration: "none",
      fontSize: "1rem",
      "&.is-selected": {
        color: amber[400],
      },
    },
  },
};
