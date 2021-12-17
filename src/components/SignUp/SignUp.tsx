import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";

import { styles } from "./styles";
import { useAppDispatch } from "../../app/hooks";
import { signUp } from "../../features/auth/slice";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data: any) => dispatch(signUp());

  const password = watch("password");
  const rePassword = watch("rePassword");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={styles.SignUp}>
        <Paper sx={styles.wrapper}>
          <Box sx={styles.field}>
            <TextField
              label={t("SignUp.username")}
              variant="outlined"
              fullWidth
              {...register("email", { required: true })}
            />

            {errors.email && (
              <Box sx={styles.error}>This field is required</Box>
            )}
          </Box>

          <Box sx={styles.field}>
            <TextField
              type="password"
              label={t("SignUp.password")}
              variant="outlined"
              fullWidth
              {...register("password", { required: true })}
            />

            {errors.password && (
              <Box sx={styles.error}>This field is required</Box>
            )}
          </Box>

          <Box sx={styles.field}>
            <TextField
              type="password"
              label={t("SignUp.rePassword")}
              variant="outlined"
              fullWidth
              {...register("rePassword", { required: true })}
            />

            {errors.rePassword && (
              <Box sx={styles.error}>This field is required</Box>
            )}

            {password && rePassword && password !== rePassword && (
              <Box sx={styles.error}>Passwords do not match</Box>
            )}
          </Box>

          <Box sx={styles.field}>
            <Button type="submit" variant="outlined" fullWidth={true}>
              {t("SignUp.button")}
            </Button>
          </Box>
        </Paper>
      </Box>
    </form>
  );
};

export default SignUp;
