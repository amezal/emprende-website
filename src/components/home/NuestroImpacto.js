import React, { useState, useEffect, useRef } from 'react';

function remap(input, input_start, input_end, output_start, output_end) {
  const output = output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start)
  return output;
}

function ease(x) {
  return x < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
}

const NuestroImpacto = () => {

  const [counting, setCounting] = useState(false);
  const [emprendimientos, setEmprendimientos] = useState(0);
  const [ferias, setFerias] = useState(0);
  const [trafico, setTrafico] = useState(0);
  const goals = {
    emprendimientos: 173,
    ferias: 23,
    trafico: 50,
  }

  const myRef = useRef(null);

  const startCounting = (e) => {
    const rect = myRef.current.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      setCounting(true)
    }
  }

  const count = async () => {
    let delay = 50;
    let msPassed = 0;
    const duration = 3000;
    const p = 3;

    const timerId = setInterval(() => {
      if (msPassed >= duration) {
        clearInterval(timerId);
      }

      const value = remap(msPassed, 0, duration, 0, 1);
      const counter = ease(value);
      setEmprendimientos(
        Math.floor(remap(counter, 0, 1, 0, goals.emprendimientos))
      )
      setFerias(
        Math.floor(remap(counter, 0, 1, 0, goals.ferias))
      )
      setTrafico(
        Math.floor(remap(counter, 0, 1, 0, goals.trafico))
      )
      msPassed += delay;
    }, delay);
  }

  useEffect(() => {
    window.addEventListener('scroll', startCounting)
    return () => {
      window.removeEventListener('scroll', startCounting);
    }
  }, [])

  useEffect(() => {
    if (counting) {
      count();
    }
  }, [counting])

  const statClass = `nuestro-impacto__stat ${(emprendimientos === goals.emprendimientos) ? 'nuestro-impacto__stat--completed' : ''}`

  return (
    <section className="nuestro-impacto">
      <div ref={myRef} className="container">
        <h2>Nuestro Impacto</h2>
        <div className="nuestro-impacto__stats">
          <div className={statClass}>
            <h3>{`+${emprendimientos}`}</h3>
            <p>Emprendimientos beneficiados</p>
          </div>
          <div className={statClass}>
            <h3>{`+${ferias}`}</h3>
            <p>Ferias y eventos realizados</p>
          </div>
          <div className={statClass}>
            <h3>{`+${trafico}k`}</h3>
            <p>Alcance en ferias y digital</p>
          </div>
        </div>

        <h2>Conocé más de nosotros</h2>
        <p>Te contamos cuál es nuestro propósito y lo que hacemos para lograrlo</p>
        <div className="video">
          <iframe width="1350" height="770" src="https://www.youtube.com/embed/Scg6uHLQ0GI"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </section >
  )
}

export default NuestroImpacto