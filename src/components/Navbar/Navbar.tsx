import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Tabs from "../Tabs/Tabs";
import { styles } from "./styles";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Tabs />

        <Box sx={styles.pusher} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
