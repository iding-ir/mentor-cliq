import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";

import { styles } from "./styles";

const Profile = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={styles.Profile}>
        <Box sx={styles.step}>
          <Paper sx={styles.wrapper}>
            <Box sx={styles.field}>
              <TextField
                label={t("SignIn.username")}
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
                label={t("SignIn.password")}
                variant="outlined"
                fullWidth
                {...register("password", { required: true })}
              />

              {errors.password && (
                <Box sx={styles.error}>This field is required</Box>
              )}
            </Box>

            <Box sx={styles.field}>
              <Button type="submit" variant="outlined" fullWidth={true}>
                {t("SignIn.button")}
              </Button>
            </Box>
          </Paper>
        </Box>

        <Box sx={styles.step}>
          <Paper sx={styles.wrapper}>
            <Box sx={styles.field}>
              <TextField
                label={t("SignIn.username")}
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
                label={t("SignIn.password")}
                variant="outlined"
                fullWidth
                {...register("password", { required: true })}
              />

              {errors.password && (
                <Box sx={styles.error}>This field is required</Box>
              )}
            </Box>

            <Box sx={styles.field}>
              <Button type="submit" variant="outlined" fullWidth={true}>
                {t("SignIn.button")}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </form>
  );
};

export default Profile;
