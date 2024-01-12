import Card from "@mui/material/Card";
import { FC, useState } from "react";

interface ICardData {
  title: string;
  text: string;
  time: string;
  comment: string;
  id?: number;
}

const Column: FC<{ title: string }> = ({ title }) => {
  const [cards] = useState<ICardData[]>([]);

  return (
    <div>
      <h2>{title}</h2>
      {cards.map((card, index) => (
        <Card key={card.id || index}>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
          <p>{card.time}</p>
          <p>{card.comment}</p>
        </Card>
      ))}
    </div>
  );
};

export default Column;
