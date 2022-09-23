import { useState } from "react";

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <h2>All {props.combinedCount}</h2>
      <h2>Average {props.average}</h2>
      <h2>Positive {props.positiveFeedback * 100}%</h2>
    </div>
  );
};

const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const combinedCount = good + bad + neutral;
  const average = (good * 1 + neutral * 0 + bad * -1) / combinedCount;
  const positiveFeedback = good / combinedCount;

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>
      <div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          combinedCount={combinedCount}
          average={average}
          positiveFeedback={positiveFeedback}
        />
      </div>
    </div>
  );
};

export default App;
