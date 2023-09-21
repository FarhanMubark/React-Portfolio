import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import SocialLinks from "./components/SocialLinks"
import Experince from "./components/Experince"
import Contact from "./components/Contact"


function App() {
  return (
      <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experince />
      <Contact />
      <SocialLinks />
      <Footer/>
    </div>
  )
}

export default App
