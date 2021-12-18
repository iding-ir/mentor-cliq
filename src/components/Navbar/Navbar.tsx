import Box from "@mui/material/Box";

import Language from "../Language/Language";
import Theme from "../Theme/Theme";
import { styles } from "./styles";

const Navbar = () => {
  return (
    <Box sx={styles.Navbar}>
      <Theme />

      <Language />
    </Box>
  );
};

export default Navbar;
