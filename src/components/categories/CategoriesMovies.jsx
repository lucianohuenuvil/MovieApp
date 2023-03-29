import React, { useContext, useState } from 'react'
import { Link, Navigate, useMatch, useParams } from 'react-router-dom'
import { Context } from '../context/Context'
import { MovieFilter } from '../movies/MovieFilter'
import { Movies } from '../movies/Movies'
import { SearchBar } from '../searchbar/SearchBar'
import { Title } from '../title/Title'

export const CategoriesMovies = () => {

    const globalContext = useContext(Context)
    const match = useMatch('categories/:category')
    const params = useParams()
    const category_params = globalContext.categoryList.filter( category => category.url === params.category)
    const [search, setsearch] = useState('')


    //Si la ruta no pertenece a ningun id de categoría (No existe la categoría) será redireccionado a Inicio
    if(category_params.length === 0) 
      return <Navigate to ="/"/>

    const [{id, categoryName}]  = category_params
    const moviesList = globalContext.moviesList.filter( movie => movie.category === id) 


  return (
    <div>

      <SearchBar setsearch={setsearch}></SearchBar>
      <Title title={"Categoría: " + categoryName }></Title>

      <div className='moviesContainer'> 

        { search === ''
            ?   <Movies moviesList={moviesList}></Movies>
            :   <MovieFilter search={search} moviesList={moviesList}></MovieFilter>
          }

       </div>
    </div>


  )
}
