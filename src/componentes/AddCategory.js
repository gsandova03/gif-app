import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [input, setInput] = useState("");
  
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if( input.trim().length > 2 ){
      setCategories(( categories ) => [ input ,...categories ]);
      setInput('');
    }
  
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type='text'
        value={ input }
        onChange={ handleChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,

}