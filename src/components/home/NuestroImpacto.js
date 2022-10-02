import React, { useState, useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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

  const data = useStaticQuery(
    graphql`
      query{
        allWpKpi(sort: {fields: date, order: ASC}) {
          nodes {
            kpis {
              text
              value
            }
          }
        }
      }
    `
  );
  const kpis = data.allWpKpi.nodes.map(node => node.kpis);
  const [emprendimientos, ferias, trafico] = kpis;
  // const emprendimientos = { value: 1, text: 'hola' }
  // const ferias = { value: 2, text: 'hola' }
  // const trafico = { value: 3, text: 'hola' }

  const [counting, setCounting] = useState(false);
  const [emprendimientosCounter, setEmprendimientosCounter] = useState(0);
  const [feriasCounter, setFeriasCounter] = useState(0);
  const [traficoCounter, setTraficoCounter] = useState(0);

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
      setEmprendimientosCounter(
        Math.floor(remap(counter, 0, 1, 0, emprendimientos.value))
      )
      setFeriasCounter(
        Math.floor(remap(counter, 0, 1, 0, ferias.value))
      )
      setTraficoCounter(
        Math.floor(remap(counter, 0, 1, 0, trafico.value))
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

  const statClass = `nuestro-impacto__stat ${(emprendimientosCounter === emprendimientos.value) ? 'nuestro-impacto__stat--completed' : ''}`

  return (
    <>
      {data &&
        <section className="nuestro-impacto">
          <div ref={myRef} className="container">
            <h2>Nuestro Impacto</h2>
            <p className="subtitulo">Seguimos dejando huella en pro del emprendimiento local</p>
            <div className="nuestro-impacto__stats">
              <div className={statClass}>
                <h3>{`+${emprendimientosCounter}`}</h3>
                <p>{emprendimientos.text}</p>
              </div>
              <div className={statClass}>
                <h3>{`+${feriasCounter}`}</h3>
                <p>{ferias.text}</p>
              </div>
              <div className={statClass}>
                <h3>{`+${traficoCounter}k`}</h3>
                <p>{trafico.text}</p>
              </div>
            </div>

            <hr />
            
            <h2>Conocé más de nosotros</h2>
            <p className="subtitulo">Te contamos cuál es nuestro propósito y lo que hacemos para lograrlo</p>
            <div className="video">
              <iframe width="1350" height="770" src="https://www.youtube.com/embed/Scg6uHLQ0GI"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </section >
      }
    </>
  )
}

export default NuestroImpacto