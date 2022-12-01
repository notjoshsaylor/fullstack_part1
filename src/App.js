import {useState} from "react"

const Button = ({onClick, body}) => <button onClick={onClick}>{body}</button>
const All = ({all}) => <div>All {all}</div>
const Average = ({average}) => <div>Average {average}</div>
const Positive = ({positive}) => <div>Positive {positive}</div>

const Averages = ({all, average, positive}) => (
  <>
    <h2>Averages</h2>
    <div>
      <All all={all} value={all} />
      <Average average={average} />
      <Positive positive={positive} />
    </div>
  </>
)

const Statistics = ({title, value}) => <div>{title} {value}</div>

const Stats = ({good, bad, neutral}) => {
  const all = good + neutral + bad || 0
  const average = (good + bad + neutral) / 3 || 0
  const positive = (good / all) * 100  || 0

  if (all === 0 ){
    return(
      <p>No FeedBack given</p>
    )
  }

  return(
    <>
      <h2>Statistics</h2>
      <Statistics value={good} title={"Good"} />
      <Statistics value={neutral} title={"Neutral"} />
      <Statistics value={bad} title={"Bad"} />
      <Averages average={average} all={all} positive={positive}/>
    </>
  )
}

const App =() => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleButton = (button) => () => {
    if (button === 'good'){
      setGood(good +1)
    }else if (button === 'bad'){
      setBad(bad + 1)
      }else if (button === 'neutral'){
        setNeutral(neutral + 1)
      }
    }

  return(
    <>
      <h1>Give FeedBack</h1>
      <Button style={{height: '30px', width:"30px"}} onClick={handleButton('good')} body={'good'} />
      <Button style={{height: '30px'}} onClick={handleButton('neutral')} body={'neutral'} /> 
      <Button style={{height: '30px'}} onClick={handleButton('bad')} body={'bad'} /> 
      <Stats good={good} neutral={neutral} bad={bad}/>
    </>
    )
}




export default App