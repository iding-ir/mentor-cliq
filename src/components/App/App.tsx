import { HashRouter as Router } from "react-router-dom";

import "../../localization";
import Pages from "../Pages/Pages";

function App() {
  return (
    <Router>
      <Pages />
    </Router>
  );
}

export default App;
