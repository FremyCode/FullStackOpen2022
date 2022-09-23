import { useState } from "react";

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const combinedCount = good + bad + neutral;
  const average = (good*1 + neutral*0 + bad*-1) / combinedCount;
  const positiveFeedback = good / combinedCount;

  //Laajenna sovellusta siten, että se näyttää palautteista enemmän statistiikkaa: yhteenlasketun määrän, keskiarvon
  // (hyvän arvo 1, neutraalin 0, huonon -1) ja sen kuinka monta prosenttia palautteista on ollut positiivisia


  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>
      <div>
        <div>
          <h1>Statistics</h1>
          <p>Good {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
          <h2>All {combinedCount}</h2>
          <h2>Average {average}</h2>
          <h2>Positive {positiveFeedback * 100}%</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
