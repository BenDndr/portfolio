import './App.css'
import { useState } from 'react'
import Counter from './components/Counter'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Pres from './components/Pres'
import Footer from './components/Footer'

function App() {
  const [projects, setProject] = useState([
    {
        id: 1,
        name: 'Test',
        description: 'Hello'
    },
    {
        id: 2,
        name: 'React',
        description: 'Good'
    },
    {
      id: 3,
      name: 'Third',
      description: 'Holas'
    },
    {
      id: 4,
      name: 'Beurre',
      description: 'Oui'
    },
    {
      id: 5,
      name: 'Schlouki',
      description: 'Beurré'
     },
     {
      id: 6,
      name: 'Pastis',
      description: 'Good'
    }
  ])

  const [count, setCount] = useState(1)
  
  const addOne = (count) => {
    setCount(count += 1)  
  }

  const removeOne = (count) => {
    setCount(count -= 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <Navbar />
      <main>
          <div className="content">
          <div className="banner">
            <h1>Benjamin Dandre</h1>
            <i className="fa fa-spinner fa-spin"></i>
            <Counter 
              count={count} 
              click1={addOne} 
              click2={removeOne}
              click3={reset}
            />
          </div>

        <Pres />

          <div>
            <p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?
            Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.
            You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.
            </p>
          </div>

          <div className="project-section">
            <Projects projects={projects}/>
          </div>
        </div>
        <Footer />
      </main>
      
    </div>
  );
}

export default App;
