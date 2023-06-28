import {useEffect} from 'react'

import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=57ad6176'

//57ad6176
//http://www.omdbapi.com/?i=tt3896198&apikey=57ad6176

export default function App() {
    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`)
        const data = await res.json();
        console.log(data)
    
    }
    useEffect (() => {
        searchMovies('Superman');
    }, [])
  return (
    <div className='app'>
      <h1>Movieland</h1>
      <div className='search'>
        <input
        placeholder='Search for movies'
        />
      </div>
    </div>
  )
}