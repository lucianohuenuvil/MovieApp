import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Title } from '../title/Title'
import { Context } from '../context/Context'
import '../../styles/categories/categories.css'






export const Categories = () => {
  

  const {categoryList} = useContext(Context)


  return (
    <>
        <Title title="Categorías"></Title>

        <div className='categories-box'>
          {
            categoryList.map( category => {
              return <div className='category' key={category.id}> 
                        <Link to={"/categories/" + category.url} >{category.categoryName} </Link>
                      </div>
            })
          }
        </div>


    </>
  )
}
