import Header from './components/General/Header'
import Facts from './components/body/Facts'
import Experience from './components/body/Experience'
import Projects from './components/body/Projects'
import Slider from './components/body/Slider'
import './App.css'
function App() {

  return (
  <div className="dark:bg-primary-dark font-[NotoSansTangsa] relative bg-primary-light flex items-center flex-col box-border min-w-[300px] ">
    <img src="/Images/bg.jpg" className="object-cover fixed inset-0 w-screen h-screen opacity-10 grayscale dark:grayscale-0" alt=""/>
      <Header />
      <Facts />
      <Experience />
      <Projects />
      <Slider />
      <footer className="max-w-limit flex p-20 dark:text-secondary-dark text-secondary-light tiny:text-sm tiny:px-2 text-center  ">
        <span>Made with love ❤ by Samuel Montes</span>
      </footer>
  </div>
  )
}

export default App
