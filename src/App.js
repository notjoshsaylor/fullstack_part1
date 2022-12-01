import {useState} from "react"

const Button = ({onClick, body}) => <button onClick={onClick}>{body}</button>

const Stats = ({good, bad, neutral}) => {
  const all = good + neutral + bad || 0
  const average = (good + bad * -1) / all || 0
  const positive = (all / good) * 100 || 0

  if (all === 0 ){
    return(
      <p>No FeedBack given</p>
    )
  }

  return(
    <>
       <h2>Statistics</h2>
      <h4>Good: {good}</h4>
      <h4>Neutral: {neutral}</h4>
      <h4>Bad: {bad}</h4>
      <h4>All: {all}</h4>
      <h4>Average: {average}</h4>
      <h4>Postitive: {positive}</h4>
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