import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";

import { styles } from "./styles";

interface IProps {}

const SignUp = (props: IProps) => {
  const { t } = useTranslation();

  return <Box sx={styles.SignUp}>{t("SignUp.form")}</Box>;
};

export default SignUp;
