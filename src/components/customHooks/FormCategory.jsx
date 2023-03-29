import React from 'react'

export const FormCategory = () => {
  return (
    <div className='form-container'>

        <form className="form" onSubmit={}>

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
