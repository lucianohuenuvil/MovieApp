
import React, { useEffect, useState } from 'react'
import { Context } from './context/Context'
import { AppRouter } from './routes/AppRouter'
import {Datamovies} from '../data/DataMovies'
import {DataCategories} from '../data/DataCategories'
import "../styles/main.css"



 const App = () => {



  const GetMovies = () => {
    return JSON.parse(localStorage.getItem('movies')) || Datamovies;
  }

  const GetCategory = () => {
    return JSON.parse(localStorage.getItem('categories')) || DataCategories;
  }



  const [moviesList, setmoviesList] = useState(GetMovies)
  const [categoryList, setcategoryList] = useState(GetCategory)



  
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(moviesList))
  }, [moviesList])
  

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categoryList))
  }, [categoryList])
  







  return (
    <div className="container">
        {/* <button onClick={addData}>Rellenar</button>   */}
        {/* <button onClick={addDataCategory}>Rellenar Categoría</button>   */}
        <Context.Provider value={{moviesList, setmoviesList, categoryList, setcategoryList}}>
          <AppRouter ></AppRouter>
        </Context.Provider>
    </div>
  )
}

export default App
