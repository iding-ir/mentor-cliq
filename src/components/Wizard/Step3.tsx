import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { styles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToWizard, selectProfile } from "../../features/profile/slice";
import Error from "../Error/Error";
import NarrowLayout from "../NarrowLayout/NarrowLayout";
import { IEmployee } from "../../types";
import * as URLS from "../../constants/urls";

const Step3 = (props: any) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const wizard = useAppSelector(selectProfile).wizard;
  const navigate = useNavigate();

  const { department, jobTitle, country, city } = wizard;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: { department, jobTitle, country, city },
  });

  const onSubmit = async (data: Partial<IEmployee>) => {
    dispatch(addToWizard(data));

    navigate(URLS.SUGGESTIONS);
  };

  const handlePreviousStep = () => {
    props.previousStep();
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
              label={t("Profile.department")}
              variant="outlined"
              fullWidth
              {...register("department", { required: true })}
            />

            {errors.department && <Error error={t("Error.required")} />}
          </Box>

          <Box sx={styles.field}>
            <TextField
              label={t("Profile.jobTitle")}
              variant="outlined"
              fullWidth
              {...register("jobTitle", { required: true })}
            />

            {errors.jobTitle && <Error error={t("Error.required")} />}
          </Box>

          <Box sx={styles.field}>
            <TextField
              label={t("Profile.country")}
              variant="outlined"
              fullWidth
              {...register("country", { required: true })}
            />

            {errors.country && <Error error={t("Error.required")} />}
          </Box>

          <Box sx={styles.field}>
            <TextField
              label={t("Profile.city")}
              variant="outlined"
              fullWidth
              {...register("city", { required: true })}
            />

            {errors.city && <Error error={t("Error.required")} />}
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

export default Step3;
