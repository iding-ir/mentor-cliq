import { useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { signOut, selectAuth } from "../../features/auth/slice";
import NarrowLayout from "../NarrowLayout/NarrowLayout";
import { clearWizard } from "../../features/profile/slice";
import { useNavigation } from "../../hooks/useNavigation";

const SignOut = () => {
  const dispatch = useAppDispatch();
  const { setRoute } = useNavigation();
  const status = useAppSelector(selectAuth).status;

  useEffect(() => {
    const logout = async () => {
      await dispatch(signOut());

      dispatch(clearWizard());

      setRoute("home");
    };

    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NarrowLayout>
      {status === "loading" ? <LinearProgress /> : null}
    </NarrowLayout>
  );
};

export default SignOut;
