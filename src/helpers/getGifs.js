export const getGifs = async( category ) => {

  const KEY = "F2Iyjsf6k8tlVUL4X70d8I8B3lE96J5p";

  const respuesta = await fetch(`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=${ KEY }`);
  
  const { data } = await respuesta.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })
  
  return gifs;
}