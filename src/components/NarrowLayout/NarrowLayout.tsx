import { ReactNode } from "react";
import Box from "@mui/material/Box";

import { styles } from "./styles";

interface Props {
  children: ReactNode;
  width?: string;
}

const NarrowLayout = ({ children, width }: Props) => {
  return <Box sx={{ ...styles.wrapper, maxWidth: width }}>{children}</Box>;
};

NarrowLayout.defaultProps = {
  width: "500px",
} as Partial<Props>;

export default NarrowLayout;
