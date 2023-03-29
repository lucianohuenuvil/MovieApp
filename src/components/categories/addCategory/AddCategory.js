import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { UseForm } from '../../customHooks/UseForm'
import { Title } from '../../title/Title'

export const AddCategory = () => {


    const {categoryList, setcategoryList} = useContext(Context)

    const formInitialValues = {id:'', categoryName:"", url:""}

    const [form, handleChange, handleEmptyValues] = UseForm(formInitialValues)

    const {id, categoryName, url} = form

    const handleSubmit = (e) => {
        e.preventDefault()
        setcategoryList([...categoryList, form])
        handleEmptyValues(formInitialValues)
    }






  return (
    <div>
        <Title title="Agregar categoría"></Title>
        <form onSubmit={handleSubmit}>
            <label>Id categoría</label>
            <input type="number" onChange={handleChange} value={id} name="id" />
            <label>Nombre Categoría</label>
            <input type="text" onChange={handleChange} value={categoryName} name="categoryName" />
            <label>Url</label>
            <input type="text" onChange={handleChange} value={url} name="url" />
            <button type='submit'>Enviar</button>
        </form>
  </div>



  )
}
