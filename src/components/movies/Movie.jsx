import React, { useContext } from 'react'
import ReactPlayer from 'react-player'
import { useMatch, useParams, Navigate } from 'react-router-dom'
import { Context } from '../context/Context'
import '../../styles/movies/movies.css'

export const Movie = () => {


    const {moviesList} = useContext(Context)
    const match = useMatch('movie/:movie_id')
    const params = useParams()
    const [movie] = moviesList.filter( movies => movies.id === params.movie_id)


    if (movie.length === 0)
        return <Navigate to="/" />



  return (

      <div className='video_prayer'>
        <ReactPlayer playing controls url={movie.urlTrailer} width="100%" height="100%"></ReactPlayer>
      </div>
  )
}
