import {useEffect} from 'react'

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
    <div>
      <h1>This is the New App</h1>
    </div>
  )
}