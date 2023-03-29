import React, { useContext } from 'react'
import { Navigate, useMatch, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Context } from '../../context/Context'
import { FormMovie } from '../../customHooks/FormMovie'
import { UseForm } from '../../customHooks/UseForm'
import { Title } from '../../title/Title'

export const MovieChange = () => {


  
  const match = useMatch('changeMovie/:movie_id')
  const params = useParams()

  const {moviesList, setmoviesList, categoryList} = useContext(Context)

  const findmovie = moviesList.filter(movies => movies.id === params.movie_id)

  const action = 'change'

  if (findmovie.length === 0) 
    return <Navigate to="/changeMovie"/>

  const [form, handleChange, handleEmptyValues] = UseForm(findmovie[0])





  const handleSubmit = () => {
    const newListMovies = moviesList.map( movies => {
      if (movies.id === form.id){
        movies.movieName = form.movieName
        movies.category = form.category
        movies.urlTrailer = form.urlTrailer
        movies.imageURL = form.imageURL
      }
      return movies
    })
    
    setmoviesList(newListMovies)
    Swal.fire({
      icon:'success',
      title: 'Modificado correctamente',
      text:'La Película ha sido modificada'
    })


  }






  return (
        <>
          <Title title="Modificar Película"></Title>
          <FormMovie  props={{form, handleSubmit, handleChange, categoryList, moviesList, action}}></FormMovie>
        </>


      
  )
}
