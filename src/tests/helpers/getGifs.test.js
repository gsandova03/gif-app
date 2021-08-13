import { getGifs } from "../../helpers/getGifs"

describe("Pruebas con el helper getGifs", () => {

  test('debe de traer 10 elementos', async() => {
    const gifs = await getGifs('One punch');

    expect( gifs.length ).toBe(10);
  })

  test('si no tiene argumento retorna un array vacio', async() => {
    const gifs = await getGifs('');

    expect( gifs.length ).toBe(0);
  })
  
})