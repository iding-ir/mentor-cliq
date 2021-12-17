import { useEffect } from "react";

import { useAppDispatch } from "../app/hooks";
import { fetchEmployees } from "../features/employees/slice";

const useEmployees = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useEmployees;
