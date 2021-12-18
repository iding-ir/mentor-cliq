import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import "../../localization";
import Pages from "../Pages/Pages";
import useEmployees from "../../hooks/useEmployees";
import { selectMode } from "../../features/themes/slice";
import { getTheme } from "../Theme/getTheme";
import { useAppSelector } from "../../app/hooks";

function App() {
  const mode = useAppSelector(selectMode);
  const theme = getTheme(mode);
  useEmployees();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Pages />
      </ThemeProvider>
    </Router>
  );
}

export default App;
