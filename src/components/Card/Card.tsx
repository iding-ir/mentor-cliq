import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { FC, useRef } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { XYCoord } from "dnd-core";
import Checkbox from "@mui/material/Checkbox";

import { IEmployee } from "../../types";
import { styles } from "./styles";
import { MAX_MATCHES } from "../../constants";

export interface CardProps {
  card: IEmployee;
  cards: IEmployee[];
  setCards: any;
  id: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const Card: FC<CardProps> = ({
  id,
  card,
  cards,
  setCards,
  index,
  moveCard,
}) => {
  const ref = useRef<any>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "CARD",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "CARD",
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  const onChange = (event: any) => {
    const editedCards = cards.map((c: IEmployee) => {
      if (c.email === card.email) {
        c.selected = event.target.checked;
      }

      return c;
    });

    setCards(editedCards);
  };

  const disabled =
    !card.selected &&
    cards.filter((card) => card.selected).length >= MAX_MATCHES;

  return (
    <TableRow
      ref={ref}
      data-handler-id={handlerId}
      sx={{ ...styles.Card, opacity }}
    >
      <TableCell>
        <Checkbox
          checked={card.selected}
          onChange={onChange}
          disabled={disabled}
        />
      </TableCell>

      <TableCell>{card.score.toFixed(2)}</TableCell>

      <TableCell>{`${card.firstName} ${card.lastName}`}</TableCell>

      <TableCell>{card.gender}</TableCell>

      <TableCell>{card.department}</TableCell>

      <TableCell>{card.jobTitle}</TableCell>

      <TableCell>{card.country}</TableCell>

      <TableCell>{card.city}</TableCell>
    </TableRow>
  );
};
