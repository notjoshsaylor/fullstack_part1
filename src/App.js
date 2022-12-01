import {useState} from "react"
import Display from "./Display"
import Button from "./Button"
import History from "./History"

const App =() => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  const handleGoodClick = () => {
     setGood(good + 1)
     
  }

  const handleNeutralClick = () => {
   setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
     setBad(bad + 1)
  }

  return(
    <>
      <h1>Give FeedBack</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button> 
      <button onClick={handleBadClick}>bad</button> 
      <h2>Statistics</h2>
      <h4>Good: {good}</h4>
      <h4>Neutral: {neutral}</h4>
      <h4>Bad: {bad}</h4>
    </>
    )
  
}




export default App