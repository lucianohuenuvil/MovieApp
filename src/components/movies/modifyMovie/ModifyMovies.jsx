import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import { Title } from '../../title/Title'
import { SearchBar } from '../../searchbar/SearchBar'
import Swal from 'sweetalert2'
import '../../../styles/modify/modify.css'

export const ModifyMovies = () => {

  const {moviesList, setmoviesList} = useContext(Context)

  const [search, setsearch] = useState('')


  const handleDelete = (id) => {

    const newListMovies = moviesList.filter( movies => movies.id != id)

    Swal.fire({
      title: 'Advertencia',
      text:'Está seguro que desea eliminar este registro?',
      icon:'error',
      showDenyButton:true,
      denyButtonText:'No',
      confirmButtonText:'Si',


    }).then(resp => {
      if (resp.isConfirmed){
        
        setmoviesList(newListMovies)
        Swal.fire('Se ha eliminado el registro correctamente', 'success')
      }
      else if (resp.isDenied)
        Swal.fire('información','El registro no fue eliminado', 'info')
      else 
        Swal.fire('Error','Ha ocurrido un error', 'error')
    })

  }


  return (
    <>
        <Title title="Modificar Películas"></Title>
        <SearchBar setsearch={setsearch}></SearchBar>

        <div className='modify-movie-container'>
          {
            moviesList.map( movie => {
            return <div className='modify-movie' key={movie.id}> 
                        <p className='modify-name'> {movie.movieName} </p>
                        <div className='modify-buttons'>
                          <Link className='button-modify' to={"/changeMovie/" + movie.id}>Editar</Link> 
                          <button className='button-delete' onClick={() => handleDelete(movie.id) }>Borrar</button>
                        </div>

                    </div>
            })
          }
        </div>
    </>
  )
}
