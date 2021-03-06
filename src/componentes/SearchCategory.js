import React from 'react'
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const SearchCategory = ({ category }) => {
  
  const { data: images, loading } = useFetchGifs( category );

  return (
    <>
      <h3 className="animate__animated animate__fadeIn" >{ category }</h3>
      <div className="card-grid">
        {loading
          ? <p className=" animate__animated animate__pulse">Cargando ...</p>
            
          : (
            images.map( (img) => (
              <GifGridItem key={img.id} {...img} />
            ))
          )
        }
      </div>
    </>
  )
}

SearchCategory.propTypes = {
  category: PropTypes.string.isRequired
}