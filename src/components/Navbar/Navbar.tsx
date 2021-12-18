import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Tabs from "../Tabs/Tabs";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Tabs />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
