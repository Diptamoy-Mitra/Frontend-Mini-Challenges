import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LearnComponents from './components/LearnComponents'
import LearnJS from './components/LearnJS'
import LearnProps from './components/LearnProps'
import LearnEvent from './components/LearnEvent'
import LearnLiftingStateUp from './components/LearnLiftingStateUp'
import LearnState from './components/LearnState'
import CounterApp from './components/CounterApp'

function App() {
  const [count, setCount] = useState(0)
  
  let roll=101;

  const getData=(data)=>{
    console.log(data)

  }

  return (
    <>
      {/* <LearnComponents /> */}
      {/* <LearnJS /> */}
      {/* <LearnProps name="Diptamoy Mitra" roll={roll}/> */}

      {/* <LearnEvent /> */}
      {/* <LearnLiftingStateUp myClick={getData}/> */}

      {/* <LearnState /> */}
      <CounterApp />
    </>
  )
}

export default App
