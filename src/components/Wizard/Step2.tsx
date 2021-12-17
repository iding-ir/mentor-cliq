import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";

import { styles } from "./styles";
import { useAppDispatch } from "../../app/hooks";
import { addToWizard } from "../../features/profile/slice";

const Step2 = (props: any) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (data: any) => {
    props.nextStep();

    dispatch(addToWizard(data));
  };

  const handlePreviousStep = () => {
    props.previousStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={styles.Step}>
        <Paper sx={styles.wrapper}>
          <Box sx={styles.field}>
            <TextField
              label={t("Profile.department")}
              variant="outlined"
              fullWidth
              {...register("department", { required: true })}
            />

            {errors.department && (
              <Box sx={styles.error}>This field is required</Box>
            )}
          </Box>

          <Box sx={styles.field}>
            <TextField
              label={t("Profile.jobTitle")}
              variant="outlined"
              fullWidth
              {...register("jobTitle", { required: true })}
            />

            {errors.jobTitle && (
              <Box sx={styles.error}>This field is required</Box>
            )}
          </Box>

          <Box sx={styles.field}>
            <TextField
              label={t("Profile.country")}
              variant="outlined"
              fullWidth
              {...register("country", { required: true })}
            />

            {errors.country && (
              <Box sx={styles.error}>This field is required</Box>
            )}

            {errors.lastName && (
              <Box sx={styles.error}>This field is required</Box>
            )}
          </Box>

          <Box sx={styles.field}>
            <TextField
              label={t("Profile.city")}
              variant="outlined"
              fullWidth
              {...register("city", { required: true })}
            />

            {errors.city && <Box sx={styles.error}>This field is required</Box>}

            {errors.lastName && (
              <Box sx={styles.error}>This field is required</Box>
            )}
          </Box>

          <Box sx={styles.field}>
            <Button
              type="button"
              variant="outlined"
              fullWidth={true}
              onClick={handlePreviousStep}
            >
              {t("Profile.previousStep")}
            </Button>
          </Box>

          <Box sx={styles.field}>
            <Button type="submit" variant="outlined" fullWidth={true}>
              {t("Profile.submit")}
            </Button>
          </Box>
        </Paper>
      </Box>
    </form>
  );
};

export default Step2;
