import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import "../../localization";
import Pages from "../Pages/Pages";
import useEmployees from "../../hooks/useEmployees";
import { selectMode } from "../../features/themes/slice";
import { getTheme } from "../Theme/getTheme";
import { useAppSelector } from "../../app/hooks";
import { useSnackbar, SnackbarContext } from "../Snackbar/useSnackbar";

function App() {
  const mode = useAppSelector(selectMode);
  const theme = getTheme(mode);
  useEmployees();
  const snackbarValues = useSnackbar();

  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <SnackbarContext.Provider value={snackbarValues}>
          <ThemeProvider theme={theme}>
            <Pages />
          </ThemeProvider>
        </SnackbarContext.Provider>
      </DndProvider>
    </Router>
  );
}

export default App;
