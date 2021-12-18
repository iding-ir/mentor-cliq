import { ReactNode } from "react";
import Box from "@mui/material/Box";

import { styles } from "./styles";

interface Props {
  children: ReactNode;
}

const NarrowLayout = ({ children }: Props) => {
  return <Box sx={styles.wrapper}>{children}</Box>;
};

export default NarrowLayout;
