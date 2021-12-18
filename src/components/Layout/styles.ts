import { Styles } from "../../types";
import { DRAWER_WIDTH } from "../../constants";

export const styles: Styles = {
  title: {
    fontSize: "1.2rem",
  },
  drawer: {
    display: "flex",
  },
  appBar: {
    width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
    marginLeft: { sm: `${DRAWER_WIDTH}px` },
  },
  drawerToggle: {
    mr: 2,
    display: { sm: "none" },
  },
  nav: {
    width: { sm: DRAWER_WIDTH },
    flexShrink: { sm: 0 },
  },
  temporaryDrawer: {
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: DRAWER_WIDTH,
    },
  },
  permanentDrawer: {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: DRAWER_WIDTH,
    },
  },
  main: {
    flexGrow: 1,
    p: 3,
    width: {
      xs: "100%",
      sm: `calc(100% - ${DRAWER_WIDTH}px)`,
    },
  },
};
