import './App.css'
import HelloWorld from './components/HelloWorld'
import { useState } from 'react'

function App() {
  let isValid: boolean = true;
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <section id="center">
        <div>
          {isValid && <HelloWorld name="Ynov User" />}
          {
            count > 3 ?
              <div>Important things</div>
              :
              <div>Silly things</div>
          }
          {
            ["Loise", "Jean", "Paul", "Marie"]
              .map((el) => <HelloWorld name={el} />)
          }
          {
            <button onClick={() => setCount(count + 1)}> Click me </button>
          }
        </div>
      </section>
    </>
  )
}

export default App