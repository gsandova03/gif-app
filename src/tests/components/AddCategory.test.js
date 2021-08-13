import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../componentes/AddCategory';


describe('Pruebas en el componente <AddCategory />', ()=>{

  //con jest.fn() se puede tener referencia de la funcion y saber cuando fue llamado o con que argumentos fue llamada

  const setCategories = jest.fn();
  let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

  //Todo los que necesite reinicializarce, hace parte del ciclo de vida de las pruebas
  beforeEach(() => {
    //Reiniciar todad las simulaciones creadas
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
  });

  test('debe de mostrar el componente correctamente', () => {
    expect( wrapper ).toMatchSnapshot();

  })
  
  test('debe de cambiar la caja de texto ', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo'

    /*
    ---------al no tener acceso al evento (e), cuando se simula el onChange este tiene un valor de undefined
    const handleChange = (e) => {
      setInput(e.target.value);
  
      console.log("handleChange llamado")
    }
    */

    input.simulate('change', {
      target: {
        value
      }
    });

    expect( wrapper.find('p').text().trim() ).toBe( value )
  })

  test('No debe de postear la informacion onSubmit si no cumple la condicion', () => {
  
    wrapper.find('form').simulate('submit', {
      preventDefault(){} 
    })

    expect( setCategories ).not.toHaveBeenCalled();
  })
  
  test('debe de llamar al setCategories y limpiar la caja de texto', () => {
    
    //1. Simular el input change
    const input = wrapper.find('input');
    const value = "Nuevo texto";

    input.simulate('change', {
      target: {
        value
      }
    })
    //2. Simular el submit
    wrapper.find('form').simulate('submit', {
      preventDefault(){}
    })

    //3. setCategories se de haber llamado 1 vez

    expect( setCategories ).toHaveBeenCalledTimes(1);
    
    //4. El valor del input debe de ser ''
    expect( input.prop('value') ).toBe('');

  })
  
})