import './App.css'
import { useState } from 'react'
import Counter from './components/Counter'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Pres from './components/Pres'
import Footer from './components/Footer'
import data from './data'
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

  var divBanner = {
    backgroundImage: 'url(' + require("./img/banner.jpg").default + ')'
  }

  return (
    <div className="App">
      <Navbar />
      <main>
          <div className="content" id="topid">
            <div className="banner" style={divBanner}>
            <div className="pic-div">
              <img src={require("./img/profile_pic.jpeg").default} alt="photo" className="pic"/>
            </div>
            <div className="title">
              <h1>Benjamin Dandre Développeur Web</h1>
            </div>
            {/* <Counter 
              count={count} 
              click1={addOne} 
              click2={removeOne}
              click3={reset}
            /> */}
          </div>
          
          <div>
            <Pres />
          </div>
          
          <div className="main-container">

            <Skills />

            <Projects projects={data}/>     
            
            <Youtubevid embedId="n78u5LzYeWg" />

            <Contact form={form} click={showForm}/>
          </div>
        </div>
        <Footer />
      </main>
      
    </div>
  );
}

export default App;
