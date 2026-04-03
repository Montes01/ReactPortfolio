import { Header } from './components/General';
import { Facts, Experience, Slider } from './components/body';
import './App.css'
function App() {

  return (
  <div className="dark:bg-primary-dark font-[NotoSansTangsa] relative bg-primary-light flex items-center flex-col box-border min-w-[300px] ">
    <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(9,153,255,0.3),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(9,153,255,0.15),transparent)] pointer-events-none" />
    <div className="w-full max-w-limit">
      <Header />
      <Facts />
      <Experience />
      <Slider />
      <footer className="flex p-20 dark:text-secondary-dark text-secondary-light tiny:text-sm tiny:px-2 text-center  ">
        <span>Made with love ❤ by Samuel Montes</span>
      </footer>
    </div>
  </div>
  )
}

export default App
