import { useState } from "react";
import { useTranslation } from "react-i18next";
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
import Snackbar from "../Snackbar/Snackbar";
import { ReactComponent as Logo } from "../../assets/images/icon-logo.svg";
import { getTheme } from "../Theme/getTheme";
import { selectMode } from "../../features/themes/slice";
import { useAppSelector } from "../../app/hooks";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mode = useAppSelector(selectMode);
  const theme = getTheme(mode);

  const handleToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar sx={styles.title}>
        <Box sx={styles.logo}>
          <Logo
            stroke={theme.palette.primary.contrastText}
            fill={theme.palette.primary.light}
          />
        </Box>

        {t("App.title")}
      </Toolbar>

      <Divider />

      <Tabs setMobileOpen={setMobileOpen} />
    </>
  );

  return (
    <Box sx={styles.drawer}>
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label={t("Layout.toggleDrawer")}
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

        <Snackbar />
      </Box>
    </Box>
  );
}
