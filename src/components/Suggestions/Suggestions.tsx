import { useState, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";

import { styles } from "./styles";
import { useAppSelector } from "../../app/hooks";
import { selectEmployees } from "../../features/employees/slice";
import { IEmployee } from "../../types";

const Suggestions = (props: any) => {
  const { t } = useTranslation();
  const employees = useAppSelector(selectEmployees);
  const [keyword, setKeyword] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;

    setKeyword(keyword);
  };

  const renderResult = () => {
    return Object.values(employees).map((employee: IEmployee) => {
      const {
        firstName,
        lastName,
        email,
        gender,
        department,
        jobTitle,
        country,
        city,
      } = employee;

      const combined = `${firstName} ${lastName} ${email} ${gender} ${department} ${jobTitle} ${country} ${city}`;

      if (!combined.toLowerCase().includes(keyword.toLowerCase())) {
        return null;
      }

      return (
        <TableRow key={combined}>
          <TableCell>{firstName}</TableCell>

          <TableCell>{lastName}</TableCell>

          <TableCell>{email}</TableCell>

          <TableCell>{gender}</TableCell>

          <TableCell>{department}</TableCell>

          <TableCell>{jobTitle}</TableCell>

          <TableCell>{country}</TableCell>

          <TableCell>{city}</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <Box sx={styles.Suggestions}>
      <Paper sx={styles.wrapper}>
        <Box sx={styles.field}>
          <TextField
            label={t("Suggestions.label")}
            variant="outlined"
            fullWidth
            value={keyword}
            onChange={handleChange}
          />
        </Box>

        <TableContainer sx={styles.tableWrapper}>
          <Table
            stickyHeader
            aria-label={t("Profile.personalData")}
            sx={styles.table}
          >
            <TableHead>
              <TableRow>
                <TableCell>{t("Profile.firstName")}</TableCell>

                <TableCell>{t("Profile.lastName")}</TableCell>

                <TableCell>{t("Profile.email")}</TableCell>

                <TableCell>{t("Profile.gender")}</TableCell>

                <TableCell>{t("Profile.department")}</TableCell>

                <TableCell>{t("Profile.jobTitle")}</TableCell>

                <TableCell>{t("Profile.country")}</TableCell>

                <TableCell>{t("Profile.city")}</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>{renderResult()}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Suggestions;
