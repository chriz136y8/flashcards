import './App.css';
import { useState } from 'react';
import Card from './components/card';

const App = () => {
  // Define the list of card pairs
  const cardPairs = [
    {
      question: {
        image: "https://api.triviacreator.com/v1/imgs/quiz/question-23b7fc77-8adf-4b71-aafb-3b9276805f42.png",
        text: ""
      },
      answer: {
        image: "https://imgs.search.brave.com/KcUfRTfDvNZnkM6fTbfxwxhQAqGaz2vyTNwsCXSDgXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9rZW1vbi5jb20v/c3RhdGljLWFzc2V0/cy9jb250ZW50LWFz/c2V0cy9jbXMyL2lt/Zy9wb2tlZGV4L2Z1/bGwvMTQ1LnBuZw",
        text: "Zapdos"
      }
    },
    {
      question: {
        image: "https://api.triviacreator.com/v1/imgs/quiz/question-fa8d29a7-dede-471e-96be-9e65c196c4c8.png",
        text: ""
      },
      answer: {
        image: "https://imgs.search.brave.com/mPbkSbkY-AiWkeneixijAjfnvfyA4HmXiDdVnXVJQVI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9rZW1vbi5jb20v/c3RhdGljLWFzc2V0/cy9jb250ZW50LWFz/c2V0cy9jbXMyL2lt/Zy9wb2tlZGV4L2Z1/bGwvMTMzLnBuZw",
        text: "Eevee"
      }
    },
    {
      question: {
        image: "https://imgs.search.brave.com/U7nwEJlWAxwSyWG9KNy5jIPxhOKlX_7v3EMzvamlhv8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcGku/dHJpdmlhY3JlYXRv/ci5jb20vdjEvaW1n/cy9xdWl6L2NvdmVy/LWE5MTM1ZWU0LWRi/Y2YtNDNjYy1hMmQw/LWFiNzIxMTg3Mjk2/Yi5wbmc",
        text: ""
      },
      answer: {
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/150.png",
        text: "Mewtoo"
      }
    },
    {
      question: {
        image: "https://api.triviacreator.com/v1/imgs/quiz/question-c13ccbc7-214a-4221-9679-ed4b7e7d3102.png",
        text: ""
      },
      answer: {
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/417.png",
        text: "Pachirisu"
      }
    },
    {
      question: {
        image: "https://api.triviacreator.com/v1/imgs/quiz/question-5a1c2d74-3c3b-4a54-a12c-c72ba594759d.png",
        text: ""
      },
      answer: {
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/703.png",
        text: "Carbink"
      }
    },
    {
      question: {
        image: "https://api.triviacreator.com/v1/imgs/quiz/question-958a6f13-c7cc-4de9-8279-280199b43235.png",
        text: ""
      },
      answer: {
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/502.png",
        text: "Dewott"
      }
    }

  ];

  // State for current card index and whether to show answer
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Toggle the card between question and answer
  const flipCard = () => {
    setShowAnswer(prev => !prev);
  };

  // Show a random new card and reset to the question side
  const nextCard = () => {
    let newIndex;
    if (cardPairs.length === 1) return; // only one card available
    // Choose a random index different from the current one
    do {
      newIndex = Math.floor(Math.random() * cardPairs.length);
    } while (newIndex === currentIndex);
    setCurrentIndex(newIndex);
    setShowAnswer(false);
  };

  // Get the current card data based on flip state
  const currentCard = showAnswer ? cardPairs[currentIndex].answer : cardPairs[currentIndex].question;

  return (
    <div className="App">
      <header className="header">
        
        <h1 class="title">
        <img src="https://emojis.slackmojis.com/emojis/images/1643514062/186/pokeball.png?1643514062" alt="" height={50} />
         Who's that Pokemon? 
        <img src="https://emojis.slackmojis.com/emojis/images/1643514062/186/pokeball.png?1643514062" alt="" height={50} />
        </h1>
        <h4>Test your Pokemon knowledge with these flashcards.</h4>
        <p>Total cards: {cardPairs.length}</p>
      </header>

      <div className="card-container">
        {/* Clicking the card flips it */}
        <div onClick={flipCard} className="card">
          <Card image={currentCard.image} text={currentCard.text} />
        </div>
        <br/>
      </div>

      <div className="buttons">
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
};

export default App;
