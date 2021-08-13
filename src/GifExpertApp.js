import React, { useState } from 'react'
import { AddCategory } from './componentes/AddCategory';
import { SearchCategory } from './componentes/SearchCategory';

const GifExpertApp = ({ defaultCategories = [] }) => {

  // const [categories, setCategories] = useState(['One Punch']);
  const [categories, setCategories] = useState( defaultCategories );

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr/>

      <ul>
        {
          categories.map( ( category ) => (
            <SearchCategory key={ category } category={category} />
          ))
        }
      </ul>
    </>
  )
}

export default GifExpertApp;
