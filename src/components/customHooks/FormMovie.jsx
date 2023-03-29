import React, { useState } from 'react'
import '../../styles/forms/forms.css'


export const FormMovie = ({props}) => {

  const [errors, seterrors] = useState({})

  const {form, handleSubmit, handleChange, categoryList, moviesList, action} = props

  const {id, movieName, category, urlTrailer, imageURL} = form


  const findMovie = () => moviesList.find(movie => movie.id == id)

  const findCategory = () => categoryList.find(categories => categories.id == category)



  const handleValidation = () => {

    if (isNaN(id))
      return {code:'404',erro:'El campo id debe ser numérico'}
    else if (id.length < 1)
      return {code:'404',erro:'El campo id debe contener al menos 1 digito'}
    else if (findMovie() && action !="change")
      return {code:'404',erro:'El id ingresado ya existe, intenta con otro'}
    else if (movieName.length < 2 || urlTrailer.length < 10 || imageURL.length < 5)
      return {code:'404',erro:'Los campos deben contener mas letras'}
    else if (!findCategory())
      return {code:'404',erro:'La categoría no existe'}
    else return false

}





  const submitForm = (e) => {

    e.preventDefault()

    const errorsForm = handleValidation()

    if(!errorsForm) {
      handleSubmit()
      seterrors({code:'200', erro:'Formulario enviado correctamente'})
    } else seterrors(errorsForm)

  }




  return (
      <div className='form-container'>

        <form className="form" onSubmit={submitForm}>

          {
            (action == 'add')
            && ( <div className='id'>
                    <label>ID</label> 
                    <input type="number" required onChange={handleChange} value={id} name="id" />
                </div> )

          }
          <div className='name'> 
            <label>Nombre Película</label>
            <input type="text" required onChange={handleChange} value={movieName} name="movieName" />

          </div>

          <div className='categories'>
            <label>Categoría</label>
            <select value={category} required onChange={handleChange} name="category" >
              <option value='' >--Seleccione--</option>
              {
                categoryList.map( category => {
                  return <option key={category.id} value={category.id}>{category.categoryName}</option>
                })
              }
            </select>
          </div>

          <div className='urlTrailer'>
            <label>Url Trailer</label>
            <input type="text" required onChange={handleChange} value={urlTrailer} name="urlTrailer" />

          </div>

          <div className='imageName'>
            <label>Nombre imágen</label>
            <input type="text" required onChange={handleChange} value={imageURL} name="imageURL" />
          </div>

   
              {(errors.code === '200')
                && <p className='success'>{errors.erro} </p>
              }     

              {(errors.code === '404')
                && <p className='error'>{errors.erro}  </p>
              }     





          <div className='button-container'>
            <button className='button' type='submit'>Enviar</button>
          </div>


        </form>
      </div>

  )
}
