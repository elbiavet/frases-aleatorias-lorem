import { useState } from 'react'
import '../estilos/QuoteBox.css'
import { AiOutlineTwitter } from "react-icons/ai";


export const QuoteBox = ({cita}) => {

    const citaAleatoria = cita[Math.floor(Math.random() * (500 - 0) + 0)];
    const [frase, setFrase] = useState('')

    const nuevaCita = () =>{
        setFrase(citaAleatoria)
    }

  return (

    <div id="quote-box">
        {!citaAleatoria =="" ? (
        <>
            <div id="text">"{citaAleatoria.body}"</div>
            <div id="author">{citaAleatoria.name}</div>
            <div className="quote-a">
                <a href="http//twitter.com/intent/tweet" id="tweet-quote"><AiOutlineTwitter /></a>
                <button id="new-quote" onClick={nuevaCita}>Nueva Cita</button>
            </div>
        </>) : <p>Hola</p>
        }
        
    </div>

  )
}
