
import { useState } from 'react'

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'

function App() {
  const total = 5
  const [disponible, setDisponible] = useState(total)

  function prestar() {
    setDisponible((d) => (d > 0 ? d - 1 : 0))
  }

  function devolver() {
    setDisponible((d) => (d < total ? d + 1 : total))
  }

  return (
    <>
      <section id="center">
      </section>

      <div className="ticks"></div>

      <main>
        <div className="card">
          <h2>Raspberry Pi 5</h2>

          <p>
            {disponible} de {total} disponibles.
          </p>

          <button type="button" onClick={prestar} disabled={disponible === 0}>
            Prestar
          </button>

          <button type="button" onClick={devolver} disabled={disponible === total}>
            Devolver
          </button>
        </div>
      </main>

      <section id="spacer"></section>
    </>
  )
}

export default App
