import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { FormMovie } from '../../customHooks/FormMovie'
import { UseForm } from '../../customHooks/UseForm'
import { Title } from '../../title/Title'
import Swal from 'sweetalert2'


export const Addmovie = () => {





  const {moviesList, setmoviesList, categoryList} = useContext(Context)

  const formInitialValues = {id: '', movieName: '', category: '', urlTrailer: '', imageURL: ''}

  const [form, handleChange, handleEmptyValues] = UseForm(formInitialValues)

  const action = 'add'



  const handleSubmit = () => {
    setmoviesList([...moviesList, form])
    handleEmptyValues(formInitialValues)
    Swal.fire({
      icon:'success',
      title: 'Agregado correctamente',
      text:'La Película ha sido agregada'
    })
}



  return (
    <div className='container'>
      <Title title="Agrega una nueva película"></Title>
      <FormMovie  props={{form, handleSubmit, handleChange, categoryList, moviesList, action}}></FormMovie>
    </div>
  )
}
