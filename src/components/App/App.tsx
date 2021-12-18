import { HashRouter as Router } from "react-router-dom";

import "../../localization";
import Pages from "../Pages/Pages";
import useEmployees from "../../hooks/useEmployees";

function App() {
  useEmployees();

  return (
    <Router>
      <Pages />
    </Router>
  );
}

export default App;
