import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../app/hooks";
import { signOut } from "../../features/auth/slice";

const SignOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(signOut());

    navigate("/");
  }, []);

  return null;
};

export default SignOut;
