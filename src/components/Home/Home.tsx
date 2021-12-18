import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";

import { styles } from "./styles";

const Home = () => {
  const { t } = useTranslation();

  return <Box sx={styles.Home}>{t("Home.welcome")}</Box>;
};

export default Home;
