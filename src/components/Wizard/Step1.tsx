import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";

import { styles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToWizard, selectProfile } from "../../features/profile/slice";

const Step1 = (props: any) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const wizard = useAppSelector(selectProfile).wizard;
  console.log(wizard);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: wizard,
  });

  const onSubmit = async (data: any) => {
    props.nextStep();

    dispatch(addToWizard(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={styles.Step}>
        <Paper sx={styles.wrapper}>
          <Box sx={styles.field}>
            <TextField
              label={t("Profile.firstName")}
              variant="outlined"
              fullWidth
              {...register("firstName", { required: true })}
            />

            {errors.firstName && (
              <Box sx={styles.error}>This field is required</Box>
            )}
          </Box>

          <Box sx={styles.field}>
            <TextField
              label={t("Profile.lastName")}
              variant="outlined"
              fullWidth
              {...register("lastName", { required: true })}
            />

            {errors.lastName && (
              <Box sx={styles.error}>This field is required</Box>
            )}
          </Box>

          <Box sx={styles.field}>
            <TextField
              label={t("Profile.email")}
              variant="outlined"
              fullWidth
              {...register("email", { required: true })}
            />

            {errors.email && (
              <Box sx={styles.error}>This field is required</Box>
            )}
          </Box>

          <Box sx={styles.field}>
            <FormControl fullWidth>
              <InputLabel id="profile-gender">Gender</InputLabel>

              <Select
                labelId="profile-gender"
                id="profile-gender-select"
                label="Gender"
                {...register("gender", { required: true })}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="n/a">N/A</MenuItem>
              </Select>
            </FormControl>

            {errors.lastName && (
              <Box sx={styles.error}>This field is required</Box>
            )}
          </Box>

          <Box sx={styles.field}>
            <Button type="submit" variant="outlined" fullWidth={true}>
              {t("Profile.nextStep")}
            </Button>
          </Box>
        </Paper>
      </Box>
    </form>
  );
};

export default Step1;
