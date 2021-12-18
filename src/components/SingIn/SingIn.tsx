import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

import { styles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { signIn, selectAuth } from "../../features/auth/slice";
import * as URLS from "../../constants/urls";
import Error from "../Error/Error";
import NarrowLayout from "../NarrowLayout/NarrowLayout";
import { ISignIn } from "../../types";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const status = useAppSelector(selectAuth).status;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (data: ISignIn) => {
    await dispatch(signIn(data));

    navigate(URLS.PROFILE);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <NarrowLayout>
        {status === "loading" ? (
          <LinearProgress />
        ) : (
          <Paper sx={styles.wrapper}>
            <Box sx={styles.field}>
              <TextField
                label={t("SignIn.username")}
                variant="outlined"
                fullWidth
                {...register("email", { required: true })}
              />

              {errors.email && <Error error={t("Error.required")} />}
            </Box>

            <Box sx={styles.field}>
              <TextField
                type="password"
                label={t("SignIn.password")}
                variant="outlined"
                fullWidth
                {...register("password", { required: true })}
              />

              {errors.password && <Error error={t("Error.required")} />}
            </Box>

            <Box sx={styles.field}>
              <Button type="submit" variant="outlined" fullWidth={true}>
                {t("SignIn.button")}
              </Button>
            </Box>
          </Paper>
        )}
      </NarrowLayout>
    </form>
  );
};

export default SignIn;
