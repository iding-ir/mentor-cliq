import { useAppSelector } from "../app/hooks";
import { selectUser } from "../features/auth/slice";

export const useAuth = () => {
  const auth = useAppSelector(selectUser);

  return { auth };
};
