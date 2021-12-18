import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

import { styles } from "./styles";
import { useAppSelector } from "../../app/hooks";
import { selectProfile } from "../../features/profile/slice";
import NarrowLayout from "../NarrowLayout/NarrowLayout";

interface IProfileRow {
  title: string;
  value: string;
}

const Step1 = (props: any) => {
  const { t } = useTranslation();
  const wizard = useAppSelector(selectProfile).wizard;

  const handleEdit = () => {
    props.nextStep();
  };

  const profileRows = [
    { title: t("Profile.firstName"), value: wizard.firstName },
    { title: t("Profile.lastName"), value: wizard.lastName },
    { title: t("Profile.email"), value: wizard.email },
    { title: t("Profile.gender"), value: wizard.gender },
    { title: t("Profile.department"), value: wizard.department },
    { title: t("Profile.jobTitle"), value: wizard.jobTitle },
    { title: t("Profile.country"), value: wizard.country },
    { title: t("Profile.city"), value: wizard.city },
  ];

  return (
    <NarrowLayout>
      <Paper sx={styles.wrapper}>
        <TableContainer>
          <Table stickyHeader aria-label={t("Profile.personalData")}>
            {profileRows.map((row: IProfileRow) => {
              return (
                <TableRow key={row.title}>
                  <TableCell variant="head" align="left">
                    {row.title}
                  </TableCell>

                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              );
            })}
          </Table>
        </TableContainer>

        <Box sx={styles.field}>
          <Button
            type="button"
            variant="outlined"
            fullWidth={true}
            onClick={handleEdit}
          >
            {t("Profile.edit")}
          </Button>
        </Box>
      </Paper>
    </NarrowLayout>
  );
};

export default Step1;
