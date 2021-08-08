import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getGifs( category )
      .then( (imgs) => {
        setImages({
          data: imgs,
          loading: false
        })
      })
  }, [ category ])

  return images; 
}
