import './App.css';
import { useState } from 'react'
import Counter from './components/Counter';
import Projects from './components/Projects';

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
  ])

  const [count, setCount] = useState(1)
  
  const addOne = (count) => {
    setCount(count += 1)  
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Benjamin Dandre</h1>
        <i className="fa fa-spinner fa-spin"></i>
        <Counter count={count} click={addOne}/> 
      </div>

      <div className="container project-section">
        <Projects projects={projects}/>
      </div>
    </div>
  );
}

export default App;
