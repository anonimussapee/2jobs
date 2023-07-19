import {createClient} from 'pexels'
import {  useState } from 'react'
import { db } from '../Firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useFireBase } from '../useFIreBase'

const usePexels = () => {

  const [data,setData] = useState([])
  const {pexels,pexelsReady} = useFireBase([])



  const handleSubmit = async (dt,query) => {
    console.log('data in handle submit usepexels',dt)
    const photos = dt.photos.map(item=>{
      return {'alt': item.alt, 'url':item.url, 'photographer':item.photographer, 'photographer_url':item.photographer_url, "src": item.src.original }
    })
    const dataPhotos = { photos: photos, category:query };

    try {
      await addDoc(collection(db, 'pexels'), dataPhotos);
     
      console.log('pexels listo creado correctamente');
    } catch (error) {
      console.error('Error al crear pexels in usepexels', error);
    }

    // Reiniciar el formulario después de la creación
  
  };

  const fetch = (query) =>{
    if(query.length>2){  // console.log('this is in usepexels',pexels)
      let dataFind =   pexels.find(item=>item.category === query) || [];
      let dataSome =  pexels.some(item=>item.category === query);
        if(!dataSome && pexelsReady){
  
        const Key = 'Q9H9FqFCzkajQ95I5ELBrO0CjrZlnFcRMFgsbLzJgb7sC5zRgXwwnJXp'
      
        const client =  createClient(Key) 
        // let n=1
        
          try {
            
            client.photos.search({query,per_page:50})
            .then(dt=>{
              const photos = dt.photos.map(item=>{
                return {'alt': item.alt, 'url':item.url, 'photographer':item.photographer, 'photographer_url':item.photographer_url, "src": item.src.original }
              })
              const dataPhotos = { photos: photos, category:query };
              
              // console.log(dt)
              setData(dataPhotos)
              handleSubmit(dt, query)
              // console.log(n++)
            })

          } catch (error) {
            console.log('error in use pexels',error)
          }
      
          try {
             console.log('i am in another trycatch')
            client.photos.search({query,per_page:50})
            .then(dt=>{
              const photos = dt.photos.map(item=>{
                return {'alt': item.alt, 'url':item.url, 'photographer':item.photographer, 'photographer_url':item.photographer_url, "src": item.src.original }
              })
              return  { photos: photos, category:query };
            
              // console.log(n++)
            })

          } catch (error) {
            console.log('error in use pexels',error)
          }
      
          
        }else{
          setData( dataFind)
        }
        return dataFind
      }
      return []
  }


  return {data, fetch}

}
export {usePexels};
