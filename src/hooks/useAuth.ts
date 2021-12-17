import { useAppSelector } from "../app/hooks";
import { selectAuth } from "../features/auth/slice";

export const useAuth = () => {
  const auth = useAppSelector(selectAuth);

  return { auth };
};
