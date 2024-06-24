import './App.css'
import books from "./data";
import { useState } from 'react'
import { Book } from "./components/Book/Book";
import { BookList } from "./components/BookList/BookList";


function App() {
  const [selected, setSelected] = useState(0)

  function getStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating - 1 < i) {
        stars.push(<span>☆</span>);
      } else {
        stars.push(<span>⭐</span>);
      }
    }
    return stars;
  }
  
  
  return (
    <>
    <Book books={books}
          selected={selected}
          setSelected={setSelected}
          getStars={getStars}
          
          />
    <BookList books={books}
              selected={selected}
              setSelected={setSelected}/>
    </>
  )
}

export default App
