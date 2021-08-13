import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { SearchCategory } from '../../componentes/SearchCategory';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el componente de <SearchCategory />', ()=>{
  const category = "One Punch"
  
  
  
  test('debe de mostrar el componente correctamente ', () => {
    
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow( <SearchCategory category={ category }/> )
    expect( wrapper ).toMatchSnapshot();
  })
  
  test('debe de mostrar items cuando recibe informacion del useFetchGifs', () => {
    
    //mock para fingir que nuestro componente tiene informacion

    const imgs = [
      {
        id: 'abc',
        url: 'https://localhost.com',
        title: 'Hola mundo'
      },
      {
        id: 'def',
        url: 'https://localhost.com',
        title: 'Hola mundo'
      }
    ]

    //Agregar valores simulados
    useFetchGifs.mockReturnValue({
      data: imgs,
      loading: false
    });

    const wrapper = shallow( <SearchCategory category={ category }/> );
    
    expect( wrapper.find('p').exists() ).toBe(false)
    expect( wrapper.find('GifGridItem').length ).toBe( imgs.length )
  })
  
})