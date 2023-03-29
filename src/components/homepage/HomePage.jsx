import React, {useState, useContext} from 'react'
import { Context } from '../context/Context'
import { MovieFilter } from '../movies/MovieFilter'
import { Movies } from '../movies/Movies'
import { SearchBar } from '../searchbar/SearchBar'
import "../../styles/movies/movies.css"


export const HomePage = () => {

  const [search, setsearch] = useState('')

  const {moviesList} = useContext(Context)

  const newMovieList = structuredClone(moviesList)

  const RandomMovies = newMovieList.sort(() => Math.random() - 0.5)


  return (
    <div>

        <SearchBar setsearch={setsearch}></SearchBar>

        <div className='moviesContainer'>
          {
            search === ''
            ?   <Movies moviesList={RandomMovies}></Movies>
            :   <MovieFilter search={search} moviesList={moviesList}></MovieFilter>
          }

        </div>

        {/* <button onClick={addData}></button> */}
    </div>
  )
}
