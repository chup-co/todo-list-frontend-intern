"use client"
import React, { FC, useState } from 'react';

interface ICardData {
  title: string;
  text: string;
  time: string;
  comment: string;
  id?: number;
}

const App: FC = () => {
  const [cards, setCards] = useState<ICardData[]>([
    {
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '17h30',
      comment: 'Comment',
    },
    {
      title: 'Dolor sit amet',
      text: 'Dolor sit amet, consectetur adipiscing elit, quis.',
      time: '18h00',
      comment: 'Comment',
    },
  ]);

  const addNewCard = () => {
    const newCard: ICardData = {
      title: 'New Card Title',
      text: 'New Card Text',
      time: 'Now',
      comment: 'New Comment',
    };
    setCards([...cards, newCard]);
  };

  return (
    <div>
      <button onClick={addNewCard}>+ Add task</button>
      {cards.map((card, index) => (
        <div key={index}>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
          <p>{card.time}</p>
          <p>{card.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
