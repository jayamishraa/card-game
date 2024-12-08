import React, { useEffect } from 'react';
import Card from './components/Card';
import { createBoard } from './setup';
import { CardType } from './setup';
import homePenguin from './assets/home-penguin.gif'
import Rules from './components/Rules';
import Finish from './components/Finish';

export const shuffleArray = (arr: any[]): any[] => {
  return arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
};

const App = () => {
  const [cards, setCards] = React.useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = React.useState(false);
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(undefined);

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      console.log('Game Won!');
      setGameWon(true);
    }
  }, [matchedPairs]);

  const handleCardClick = (currentClickedCard: CardType) => {
    setCards(prev =>
      prev.map(card => (card.id === currentClickedCard.id ? { ...card, flipped: true, clickable: false } : card))
    );
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs(prev => prev + 1);
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id ? { ...card, clickable: false } : card
        )
      );
      setClickedCard(undefined);
      return;
    }

    setTimeout(() => {
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1000);

    setClickedCard(undefined);
  };

  return (
    <div className='flex justify-center h-screen items-center'>
      {/* home page */}
      {/* <div className='flex justify-center items-center'>
        <Rules />
        <img src={homePenguin} className='w-80'/>
      </div> */}

      {/* game page */}
      {/* <div className='grid grid-cols-6 gap-2 '>
        {cards.map(card => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </div> */}
      
      {/* finish */}
      <Finish />
    </div>
  );
};

export default App;