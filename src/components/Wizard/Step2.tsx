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
import Error from "../Error/Error";
import NarrowLayout from "../NarrowLayout/NarrowLayout";
import { IEmployee } from "../../types";

const Step2 = (props: any) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const wizard = useAppSelector(selectProfile).wizard;

  const { firstName, lastName, email, gender } = wizard;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: { firstName, lastName, email, gender },
  });

  const onSubmit = async (data: Partial<IEmployee>) => {
    props.nextStep();

    dispatch(addToWizard(data));
  };

  const handleCancel = () => {
    props.firstStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <NarrowLayout>
        <Paper sx={styles.wrapper}>
          <Box sx={styles.field}>
            <TextField
              label={t("Profile.firstName")}
              variant="outlined"
              fullWidth
              {...register("firstName", { required: true })}
            />

            {errors.firstName && <Error error={t("Error.required")} />}
          </Box>

          <Box sx={styles.field}>
            <TextField
              label={t("Profile.lastName")}
              variant="outlined"
              fullWidth
              {...register("lastName", { required: true })}
            />

            {errors.lastName && <Error error={t("Error.required")} />}
          </Box>

          <Box sx={styles.field}>
            <TextField
              label={t("Profile.email")}
              variant="outlined"
              fullWidth
              {...register("email", { required: true })}
            />

            {errors.email && <Error error={t("Error.required")} />}
          </Box>

          <Box sx={styles.field}>
            <FormControl fullWidth>
              <InputLabel id="profile-gender">{t("Profile.gender")}</InputLabel>

              <Select
                labelId="profile-gender"
                id="profile-gender-select"
                label={t("Profile.gender")}
                {...register("gender", { required: true })}
              >
                <MenuItem value="male">{t("Profile.male")}</MenuItem>
                <MenuItem value="female">{t("Profile.female")}</MenuItem>
                <MenuItem value="n/a">{t("Profile.na")}</MenuItem>
              </Select>
            </FormControl>

            {errors.gender && <Error error={t("Error.required")} />}
          </Box>

          <Box sx={styles.field}>
            <Button
              type="button"
              variant="outlined"
              fullWidth={true}
              onClick={handleCancel}
            >
              {t("Profile.cancel")}
            </Button>
          </Box>

          <Box sx={styles.field}>
            <Button type="submit" variant="outlined" fullWidth={true}>
              {t("Profile.submit")}
            </Button>
          </Box>
        </Paper>
      </NarrowLayout>
    </form>
  );
};

export default Step2;
