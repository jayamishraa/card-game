import React, { useEffect } from 'react';
import Card from './components/Card';
import { createBoard, CardType } from './setup';
import homePenguin from './assets/home-penguin.gif';
import Rules from './components/Rules';
import Finish from './components/Finish';
import audio from './assets/01 Sunset Breeze in Enoshima - Lazy Paws Radio Lofi Chillhop  Japan Summer Series.mp3';

export const shuffleArray = (arr: any[]): any[] => {
  return arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
};

const App = () => {
  const [screen, setScreen] = React.useState<'rules' | 'game' | 'finish'>('rules');  
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [cards, setCards] = React.useState<CardType[]>(shuffleArray(createBoard()));
  // const [gameWon, setGameWon] = React.useState(false);
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState<CardType | undefined>();

  useEffect(() => {
    // Try to auto-play
    audioRef.current?.play().catch(() => {});
  }, []);


  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      // setGameWon(true);
      setScreen('finish');
    }
  }, [matchedPairs, cards.length]);

  const handleCardClick = (currentClickedCard: CardType) => {
    setCards(prev =>
      prev.map(card =>
        card.id === currentClickedCard.id ? { ...card, flipped: true, clickable: false } : card
      )
    );

    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs(prev => prev + 1);
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, clickable: false }
            : card
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

  const startGame = () => {
      if (audioRef.current) {
    audioRef.current.volume = 0.4;   // optional
    audioRef.current.play().catch(() => {});
  }
    setCards(shuffleArray(createBoard()));
    setMatchedPairs(0);
    setClickedCard(undefined);
    // setGameWon(false);
    setScreen('game');
    
  };

  const goToRules = () => {
    setScreen('rules');
  };

  return (
    <div className="flex justify-center h-screen items-center">
    <audio
        ref={audioRef}
        src={audio}   // put your mp3 inside public/music/
        loop
        
      />

     {screen === 'rules' && (
        <div className="flex flex-col items-center space-y-6">

          <div className="flex items-center space-x-10">
            <Rules />
            <img src={homePenguin} className="w-80" />
          </div>

          <button
            onClick={startGame}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Start Game
          </button>

        </div>
      )}
      
      {screen === 'game' && (
        <div className="grid grid-cols-6 gap-2">
          {cards.map(card => (
            <Card key={card.id} card={card} callback={handleCardClick} />
          ))}
        </div>
      )}

      {screen === 'finish' && (
        <Finish
          onRestart={goToRules}
        />
      )}

    </div>
  );
};

export default App;
