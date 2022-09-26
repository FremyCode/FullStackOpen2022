import { useState } from "react";

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
        <Button
          onClick={() => setGood(good + 1)}
          text="Good"
        />
        <Button
        onClick={() => setNeutral(neutral + 1)}
        text="Good"
        />
        <Button
        onClick={() => setBad(bad + 1)}
        text="Bad"
        />
      </div>
      <div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          combinedCount={combinedCount}
          average={average}
          positiveFeedback={positiveFeedback * 100}
          percentage={"%"}
        />
      </div>
    </div>
  );
};

const Statistics = (props) => {

  if (props.combinedCount === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <h2>Insert feedback to acquire statistics</h2>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticsLine text="Good" value={props.good}/>
      <StatisticsLine text="Neutral" value={props.neutral}/>
      <StatisticsLine text="Bad" value={props.bad}/>
      <StatisticsLine text="All" value={props.combinedCount}/>
      <StatisticsLine text="Average" value={props.average}/>
      <StatisticsLine text="Positive" value={props.positiveFeedback} sign={props.percentage}/>
    </div>
  );
};

const StatisticsLine = (props) => {
  return (
    <p>{props.text} {props.value}{props.sign}</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

export default App;
