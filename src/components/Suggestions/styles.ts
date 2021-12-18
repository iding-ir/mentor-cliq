import { DRAWER_WIDTH } from "../../constants";
import { Styles } from "../../types";

export const styles: Styles = {
  Suggestions: {
    width: "100%",
  },
  wrapper: {
    padding: "1rem",
  },
  field: {
    marginBottom: "1rem",
  },
  tableWrapper: {
    maxWidth: `calc(100% -  ${DRAWER_WIDTH}`,
  },
};
