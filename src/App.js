
import { useEffect, useState } from 'react';
import './App.css';
import { QuoteBox } from './components/QuoteBox';


export function App() {

  const [cita, setCita] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/comments'
  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setCita(data))
  }, [])


  return(
    <div>
      <h1>App de citas aleatorias</h1>
      <QuoteBox cita = {cita}/>
    </div>    
  )
}