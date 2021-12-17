import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";

import { styles } from "./styles";

interface IProps {}

const Home = (props: IProps) => {
  const { t } = useTranslation();

  return <Box sx={styles.Home}>{t("Home.welcome")}</Box>;
};

export default Home;
