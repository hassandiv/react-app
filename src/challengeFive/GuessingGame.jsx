import { useEffect, useState } from "react";

const GuessingGame = () => {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isSelected, setIsSelected] = useState(null);

  const generateRandomColor = () => {
    const mixChars = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];

    const color = new Array(6)
      .fill("")
      .map(() => mixChars[Math.floor(Math.random() * mixChars.length)])
      .join("");

    return `#${color}`;
  };

  const pickColor = () => {
    const actualColor = generateRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, generateRandomColor(), generateRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    pickColor();
  }, []);

  const handleSelectedAnswer = (answer) => {
    if (answer === color) {
      setIsSelected(true);
      pickColor();
    } else {
      setIsSelected(false);
    }
  };

  return (
    <div className="guess-game">
      <div className="guess-me" style={{ backgroundColor: color }}>
        Click me!
      </div>
      {answers.map((answer, idx) => (
        <button key={idx} onClick={() => handleSelectedAnswer(answer)}>
          {answer.toUpperCase()}
        </button>
      ))}
      {isSelected === true ? (
        <p>Correct Color!</p>
      ) : (
        isSelected === false && <p>Wrong Color!</p>
      )}
    </div>
  );
};
export default GuessingGame;
