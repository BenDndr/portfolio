import './App.css'
import { useState } from 'react'
import Counter from './components/Counter'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Pres from './components/Pres'
import Footer from './components/Footer'
import data from './data'
import Title from './components/Title'
import Contact from './components/Contact'
import Youtubevid from './components/Youtubevid'
import Skills from './components/Skills'

function App() {

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

  const [form, setForm] = useState(false)

  const showForm = () => {
    setForm(!form)
  }

  return (
    <div className="App">
      <Navbar />
      <main>
          <div className="content">
          <div className="banner">
            <center><h1>Bienvenue sur le Portfolio de Benjamin Dandre</h1></center>
            {/* <Counter 
              count={count} 
              click1={addOne} 
              click2={removeOne}
              click3={reset}
            /> */}
          </div>

        <Pres />
        <Title titletext="Mes compétences" />
        <Skills />

        <Title titletext="Mes Projets" />

        <Projects projects={data}/>
        
        <Title titletext="Vidéo de présentation de Dare to Go au Wagon Bordeaux" />
        <p>
          Au cours de ma formation au <a href="https://www.lewagon.com/fr/bordeaux"><strong>Wagon Bordeaux</strong></a>, 
          J'ai travaillé sur un projet de groupe que j'ai eu la chance
          présenter à la fin de la formation, vous trouverez ci-dessous
          vidéo de la présentation de Dare to Go (5:30) et des autres projets de
          de la promotion.
        </p>
        <Youtubevid embedId="n78u5LzYeWg" />

        <Title titletext="Me contacter" />
        <Contact form={form} click={showForm}/>
          
        </div>
        <Footer />
      </main>
      
    </div>
  );
}

export default App;
