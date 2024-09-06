import { useState, useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './output.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    ScrollReveal().reveal('.reveal', { delay: 50 });
  }, []);

  return (
    <>
     <div className="reveal">
      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>
     </div>
    </>
  )
}

export default App