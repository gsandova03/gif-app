import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp'

describe('Pruebas en el componente <GifExpertApp />' , ()=> {

  test('debe de mostrar el componente correctamente', () => {
    
    const wrapper = shallow( <GifExpertApp /> )

    expect( wrapper ).toMatchSnapshot();

  })

  test('debe de mostar una lista de categorias', () => {
    const categories = ['One Punch', 'Hunter X Hunter'];

    const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> )

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('SearchCategory').length ).toBe( categories.length );
  })
  
})