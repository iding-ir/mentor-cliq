import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import { fetchEmployees } from "./features/employees/slice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return <div></div>;
}

export default App;
