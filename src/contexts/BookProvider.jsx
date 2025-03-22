import { createContext, useState } from "react";

export const BookContext = createContext();


export const BookProvider = ({children}) => {

  const [book, setBook] = useState({});
  const [author, setAuthor] = useState({});
  const [genre, setGenre] = useState({});


  return (
    <BookContext.Provider value={{book, setBook, author, setAuthor, genre, setGenre}}>{children}</BookContext.Provider>
  )
}
