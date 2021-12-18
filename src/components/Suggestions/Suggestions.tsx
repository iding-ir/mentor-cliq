import { useState, useCallback, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import stringSimilarity from "string-similarity";
import { Card } from "../Card/Card";
import update from "immutability-helper";

import { styles } from "./styles";
import { useAppSelector } from "../../app/hooks";
import { selectProfile } from "../../features/profile/slice";
import { IEmployee } from "../../types";
import { selectEmployees } from "../../features/employees/slice";
import { SnackbarContext } from "../Snackbar/useSnackbar";

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

const Suggestions = (props: any) => {
  const { t } = useTranslation();
  const wizard = useAppSelector(selectProfile).wizard;
  const employees = useAppSelector(selectEmployees);
  const { snackbar, setSnackbar } = useContext(SnackbarContext);

  const { department, jobTitle, country, city } = wizard;

  const sortedByScore = Object.values(employees)
    .map((employee: IEmployee) => {
      return {
        ...employee,
        selected: false,
        score:
          stringSimilarity.compareTwoStrings(employee.department, department) +
          stringSimilarity.compareTwoStrings(employee.jobTitle, jobTitle) +
          stringSimilarity.compareTwoStrings(employee.country, country) +
          stringSimilarity.compareTwoStrings(employee.city, city),
      };
    })
    .sort((a: IEmployee, b: IEmployee) => b.score - a.score);

  const [cards, setCards] = useState(sortedByScore);

  useEffect(() => {
    const selected = cards.filter((card) => card.selected);

    console.log({ cards });
    console.log({ selected });
    console.log("-------");

    setSnackbar({
      ...snackbar,
      open: true,
      button: t("Snackbar.close"),
      message: t("Suggestions.success"),
      severity: "success",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];

      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [cards]
  );

  const renderCard = (card: IEmployee, index: number) => {
    return (
      <Card
        key={card.email}
        index={index}
        id={card.email}
        card={card}
        cards={cards}
        setCards={setCards}
        moveCard={moveCard}
      />
    );
  };

  return (
    <Paper sx={styles.wrapper}>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>

              <TableCell></TableCell>

              <TableCell>{t("Profile.name")}</TableCell>

              <TableCell>{t("Profile.gender")}</TableCell>

              <TableCell>{t("Profile.department")}</TableCell>

              <TableCell>{t("Profile.jobTitle")}</TableCell>

              <TableCell>{t("Profile.country")}</TableCell>

              <TableCell>{t("Profile.city")}</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>{cards.map((card, i) => renderCard(card, i))}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Suggestions;
