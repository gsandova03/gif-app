import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el custom Hook useFetchGifs', () => {
  
  const category = "One Punch";

  test('debe de retornar el estad inicial', async() => {
    
    //Extraer la informacion del hook
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );

    //desestructurar los datos
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect( data ).toEqual( [] );
    expect( loading ).toBe( true );
  })
  
  test('debe de retornar un arreglo de imagenes y loading en false', async() => {
    
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect( data.length ).toBe( 10 );
    expect( loading ).toBe( false );
  })
  
})
