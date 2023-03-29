
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
  
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(moviesList))
  }, [moviesList])
  


  const [categoryList, setcategoryList] = useState(GetCategory)


  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categoryList))
  }, [categoryList])
  




  // const addData = () =>{


  //   setmoviesList([
  //     ...moviesList,
  //     {
  //       id:"1",
  //       movieName:"Avengers: End Game",
  //       category:"0002",
  //       urlTrailer:"https://www.youtube.com/watch?v=Oy_SER6dfK4",
  //       imageURL:"11551avengers.png"
  //     },
    
  //     {
  //       id:"2",
  //       movieName:"Harry Potter y las Reliquias de la Muerte",
  //       category:"0003",
  //       urlTrailer:"https://www.youtube.com/watch?v=GdNvFDzSNHQ",
  //       imageURL:"1155Harry.png"
  //     },
    
  //     {
  //       id:"3",
  //       movieName:"Ant Man: Quantumania",
  //       category:"0002",
  //       urlTrailer:"https://www.youtube.com/watch?v=aJYWJR7IKQA",
  //       imageURL:"11551avengers.png"
  //     },
    
  //     {
  //       id:"4",
  //       movieName:"Interestelar",
  //       category:"0003",
  //       urlTrailer:"https://www.youtube.com/watch?v=LYS2O1nl9iM",
  //       imageURL:"11551avengers.png"
  //     }])

  // }


  
  // const addDataCategory = () =>{


  //   setcategoryList([
  //     ...categoryList,
  //     {
  //       id:"0001",
  //       categoryName:"Drama",
  //       url:"drama"
  //     },
  
  //     {
  //       id:"0002",
  //       categoryName:"Acción",
  //       url:"accion"
  //     },
  
  //     {
  //       id:"0003",
  //       categoryName:"Ciencia Ficción",
  //       url:"cienciaFiccion"
  //     },
  
  //     {
  //       id:"0004",
  //       categoryName:"Terror",
  //       url:"terror"
  //     }])

  // }


  
   




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
