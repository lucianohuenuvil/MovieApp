import React from 'react'
import { Movies } from '../movies/Movies'

export const MovieFilter = ({search, moviesList}) => {


  const newMovieList = moviesList.filter( movie => {
    if (movie.movieName.toString().toLowerCase().includes(search.toLowerCase()))
      return movie
  })



  return (
      <Movies moviesList={newMovieList}></Movies>
  )
}
