import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../app/hooks";
import { routes } from "../routes";
import { setPage } from "../features/pages/slice";

export const useNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const setRoute = (key: string) => {
    navigate(routes[key].path);

    dispatch(setPage(routes[key]));
  };

  return { setRoute };
};
