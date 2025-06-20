import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";

const quizData = [
  {
    q: "Avec mes bottes, je transforme un simple garçon en marquis. Qui suis‑je ?",
    o: ["Barbe Bleue", "Le Chat Botté", "Le Petit Poucet"],
    a: 1,
  },
  {
    q: "Je porte un chaperon rouge et je dois me méfier du grand méchant loup. Qui suis‑je ?",
    o: ["Cendrillon", "Peau d'Âne", "Le Petit Chaperon Rouge"],
    a: 2,
  },
  {
    q: "Je suis très riche, mais ma barbe effraie tout le monde. Qui suis‑je ?",
    o: ["Barbe Bleue", "Riquet à la Houppe", "Grisélidis"],
    a: 0,
  },
  {
    q: "Je suis rusé et j'adore le fromage. J'ai dupé un oiseau naïf. Qui suis‑je ?",
    o: ["Le Lièvre", "Le Corbeau", "Le Renard"],
    a: 2,
  },
  {
    q: "Je suis lent mais très déterminé ; j'ai battu le lièvre à la course. Qui suis‑je ?",
    o: ["La Tortue", "Le Rat des Champs", "Le Héron"],
    a: 0,
  },
  {
    q: "Je chante tout l'été et me retrouve sans rien à manger en hiver. Qui suis‑je ?",
    o: ["Le Loup", "La Cigale", "La Grenouille"],
    a: 1,
  },
  {
    q: "Je suis un faux médecin, j'aime bien donner des ordonnances absurdes. Qui suis‑je ?",
    o: ["Tartuffe", "Scapin", "Le Médecin malgré lui"],
    a: 2,
  },
  {
    q: "Je suis très avare, je ne veux surtout pas dépenser mon argent ! Qui suis‑je ?",
    o: ["Le Bourgeois Gentilhomme", "Harpagon", "Dom Juan"],
    a: 1,
  },
  {
    q: "Je suis un valet rusé, connu pour mes fourberies. Qui suis‑je ?",
    o: ["George Dandin", "Dom Juan", "Scapin"],
    a: 2,
  },
];

export default function QuizWidget() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const handleSelectOption = (index) => {
    if (selected) return;

    setSelected(true);
    setSelectedOptionIndex(index);
    if (index === quizData[current].a) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(false);
    setSelectedOptionIndex(null);
    if (current < quizData.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };
  
  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(false);
    setShowResult(false);
    setSelectedOptionIndex(null);
  };

  const getButtonClass = (index) => {
    if (!selected) {
      return "bg-white border-2 border-purple-500 text-purple-700 hover:bg-purple-50";
    }
    const isCorrect = index === quizData[current].a;
    const isSelected = index === selectedOptionIndex;

    if (isCorrect) {
      return "bg-green-100 border-2 border-green-500 text-green-800";
    }
    if (isSelected && !isCorrect) {
      return "bg-red-100 border-2 border-red-500 text-red-800";
    }
    return "bg-white border-2 border-purple-500 text-purple-700 opacity-60";
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-2xl mx-auto">
      <h3 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-6">
        Quiz des Personnages
      </h3>
      {showResult ? (
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-700 mb-4">
            Ton score : {score} / {quizData.length}
          </p>
          {score >= 7 && (
            <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r-lg text-yellow-800 mt-6 animate-pulse">
              <p className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
                <PartyPopper/> Bravo ! Tu as gagné ta chanson bonus !
              </p>
              <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white mt-2">
                <a href="https://open.spotify.com/playlist/37i9dQZF1DWXJyjYpHy34G" target="_blank" rel="noopener noreferrer">
                  🎵 Écouter la chanson bonus
                </a>
              </Button>
            </div>
          )}
          <Button onClick={handleRestart} className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            Rejouer
          </Button>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <p className="text-lg text-gray-600 text-center">Question {current + 1}/{quizData.length}</p>
            <h4 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mt-2 min-h-[6rem] flex items-center justify-center">
              {quizData[current].q}
            </h4>
          </div>
          <div className="flex flex-col gap-3">
            {quizData[current].o.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleSelectOption(index)}
                disabled={selected}
                className={`w-full text-left justify-start p-4 h-auto text-base whitespace-normal transition-all duration-200 ${getButtonClass(index)}`}
                variant="outline"
              >
                {option}
              </Button>
            ))}
          </div>
          {selected && (
            <div className="text-center mt-6">
              <Button 
                onClick={handleNext} 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              >
                {current === quizData.length - 1 ? "Voir le résultat" : "Suivant"}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}