import { useMemo, useState } from 'react'
import './App.css'

function App() {

  const [height, setHeight]= useState(180);
  const [weight, setWeight]= useState(70);

  function onweightChange(event){
    setWeight(event.target.value)

  }

  function onheightChange(event){
    setHeight(event.target.value)

  }

  const output  = useMemo(()=>{
      const calculateaHeight = height / 100;
      return Math.floor(weight/(calculateaHeight*calculateaHeight))
  },[weight, height])

  return (
    <>
  <main>
    <h1>Project : BMI Calculator</h1>

    <div className='input-section'>
    <p className='slider-output'>
      Weight : {weight} kg
    </p>
    <input className='input-slider'
      type="range" 
      step="1"
      min="40"
      max="200"
      onChange={onweightChange}/>
      <p className="slider-output">height: {height} cm</p>
      <input className='input-slider' 
        type="range"
        min={140}
        max={220}
        onChange={onheightChange} />

        
        <div className="output-section">Your BMI is</div>
        <p className="output">{output}</p>
    </div>
  </main>
    
   </>
   )
}

export default App
