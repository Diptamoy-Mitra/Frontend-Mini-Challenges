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
import LearnUseEffect from './components/LearnUseEffect'
import LearnUseMemo from './components/LearnUseMemo'
import LearnUseCallback from './components/LearnUseCallback'
import LearnCustomHooks from './components/LearnCustomHooks'
import LearnConditionalRendering from './components/LearnConditionalRendering'
import LearnMap from './components/LearnMap'
import LearnInlineCss from './components/LearnInlineCss'
import LearnExternalCSS1 from './components/LearnExternalCSS1'
import LearnExternalCSS2 from './components/LearnExternalCSS2'
// import LearnCssModule1 from './components/LearnCssModule1.jsx'
// import LearnCssModule2 from './components/LearnCssModule2.jsx'
import LearnForm from './components/LearnForm.jsx'
import LearnUsingENV from './components/LearnUsingENV.jsx'
// import Demo from './components/Demo'

function App() {
  const [count, setCount] = useState(0)

  let roll = 101;

  //for state lifting, data comes form child to parent
  const getData = (data) => {
    console.log(data) //I am a child data //from child to parent

  }

  return (
    <>
      {/* <LearnComponents /> */}
      {/* <LearnJS /> */}
      {/* <LearnProps name="Diptamoy Mitra" roll={roll}/> */}

      {/* <LearnEvent /> */}
      {/* <LearnLiftingStateUp myClick={getData}/> */}

      {/* <LearnState /> */}
      {/* <CounterApp /> */}
      {/* {<LearnUseEffect />} */}
      {/* <LearnUseMemo /> */}
      {/* <LearnUseCallback /> */}
      {/* <LearnCustomHooks /> */}
      {/* <LearnConditionalRendering /> */}
      {/* <LearnMap /> */}
      {/* <LearnInlineCss /> */}
      {/* <LearnExternalCSS1 /> */}
      {/* <LearnExternalCSS2 /> */}
      {/* <LearnCssModule1 /> */}
      {/* <LearnCssModule2 /> */}
      {/* <LearnForm /> */}
      {/* <LearnUsingENV /> */}




      {/* <Demo /> */}
    </>
  )
}

export default App
