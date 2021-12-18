import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { signOut, selectAuth } from "../../features/auth/slice";
import * as URLS from "../../constants/urls";
import NarrowLayout from "../NarrowLayout/NarrowLayout";

const SignOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const status = useAppSelector(selectAuth).status;

  useEffect(() => {
    const logout = async () => {
      await dispatch(signOut());

      navigate(URLS.HOME);
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
