import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import Navbar from "../Navbar/Navbar";
import { styles } from "./styles";
import Tabs from "../Tabs/Tabs";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar />
      <Divider />
      <Tabs />
    </>
  );

  return (
    <Box sx={styles.drawer}>
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleToggle}
            sx={styles.drawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Navbar />
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={styles.nav}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={styles.temporaryDrawer}
        >
          {drawer}
        </Drawer>

        <Drawer variant="permanent" sx={styles.permanentDrawer} open>
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={styles.main}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}
