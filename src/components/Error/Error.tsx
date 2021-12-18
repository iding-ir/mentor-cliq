import Box from "@mui/material/Box";

import { styles } from "./styles";

interface Props {
  error: string;
}

const Error = ({ error }: Props) => {
  return <Box sx={styles.Error}>{error}</Box>;
};

export default Error;
