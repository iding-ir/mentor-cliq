import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

import Language from "../Language/Language";
import Theme from "../Theme/Theme";
import { styles } from "./styles";
import { useAppSelector } from "../../app/hooks";
import { selectPage } from "../../features/pages/slice";

const Navbar = () => {
  const { t } = useTranslation();
  const page = useAppSelector(selectPage);

  return (
    <Box sx={styles.Navbar}>
      <Box sx={styles.title}>{t(page.title || "")}</Box>

      <Box sx={styles.pusher}></Box>

      <Language />

      <Theme />
    </Box>
  );
};

export default Navbar;
