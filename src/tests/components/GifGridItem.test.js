import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import { GifGridItem } from '../../componentes/GifGridItem'

describe('Pruebas en el componente <GifGridItem/> ', ()=>{

  const titulo = "Un titulo";
  const url = "https://holamundo.com";

  const wrapper = shallow( <GifGridItem title={ titulo } url={ url } /> )

  test('debe mostrar el componente correctamente', () => {

      expect( wrapper ).toMatchSnapshot()
  })
  
  test('debe de tener un parrafo con el titulo', () => {
    
    const parrafo = wrapper.find("p");

    expect( parrafo.text().trim() ).toBe( titulo )

  })

  test('debe de tener la imagen igual al url y el alt de los props', () => {
    
    const img = wrapper.find('img');

    // console.log( img.props() )

    expect( img.prop("src") ).toBe( url );
    expect( img.prop("alt") ).toBe( titulo );
  })
  
  test('debe de tener animated__fadeIn', () => {
    
    //forma 1
    const div = wrapper.find('div');

    expect( div.hasClass("animate__fadeIn") ).toBe( true );

    //forma 2
    // const div = wrapper.find('div');

    // const className = div.prop('className');

    // expect( className.includes('animate__fadeIn') ).toBe( true )
  })
  
})