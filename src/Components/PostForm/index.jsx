import React, { useEffect, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import {usePexels}  from '../usePexels'

const PostForm = (props) => {
 
  const [query, setQuery ] = useState('')   

  const { fetch} = usePexels();
  
  const [formData, setFormData] = useState({
    author: props.user.uid || '',
    offer: '',
    city: '',
    date:new Date().getTime(),
    category: '',
    salary: '',
    image: '',
    title: '',
  });

  const [photo, setPhoto]= useState([])
   
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

 useEffect(()=>{
      const data = fetch(query)
      const photos = data.photos?.map((item, index) => {
        if (index < 15) {
        return <img key={item.url} src={item.src} alt={item.alt} loading='eager' className='w-[150px] h-[130px]' />;
        }else if (index < 25) {
          return <img key={item.url} src={item.src} alt={item.alt} loading='lazy' className='w-[150px] h-[130px]' />;
          }
      });
      setPhoto(photos);
      console.log('render this data',data);
 
 },[query])
    



  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (formData.category !== '') {
  //       setReturnDo(false)
  //       const { data } = await usePexels(formData.category);
  //       const photos = data.photos?.map((item, index) => {
  //         if (index < 25) {
  //           return <img key={item.url} src={item.src} alt={item.alt} loading='lazy' className='w-[150px] h-[130px]' />;
  //         }
  //       });
  //       setPhoto(photos);
  //       console.log(data);
  //     }
  //   };

  //   fetchData();
  // }, [formData.category]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'posts'), formData);
      // await db.collection('posts').doc().set(formData)
      console.log('Publicación creada correctamente');
    } catch (error) {
      console.error('Error al crear la publicación', error);
    }

    // Reiniciar el formulario después de la creación
    setFormData({
      author: '',
      offer: '',
      city: '',
      salary: '',
      image: '',
      title: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className=" flex flex-col max-w-3xl mx-auto p-4 md:p-8 bg-gray-100 rounded-lg">
      
      <label className="block mb-4">
        Título de la oferta laboral:
        <input
          required
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
        />
      </label>
      <label className="block mb-4">
        Descripción de la oferta laboral:
        <textarea
          name="offer"
          value={formData.offer}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
        />
      </label>
      <label className="block mb-4">
        Ciudad donde solicitas personal:
        <input
          required
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
        />
      </label>
      <label className="block mb-4">
        Salario:
        <input
          required
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
        />
      </label>
      <label className="block mb-4">
        URL de una imagen que represente tu propuesta:
        <input
          required
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
        />
      </label>
      <label className="mb-4 hidden">
        Categoria
        <input
          required
          type="text"
          name="category"
          onChange={handleChange}
          value={formData.category}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
        />
      </label>
      <label className="block mb-4">
        Categoría: 
        <select name="category" id="category_list" className='border-[#333333] border-[3px] rounded-xl ml-5' value={formData.category}
          onChange={(e)=>{
            handleChange(e)
            setQuery(e.target.value)
          }}>
          <option value="" >escoge una opcion</option>
          <optgroup label='Tecnología y desarollo'>
            <option value="website" >Desarrollo web</option>
            <option value="phones">Desarrollo movil</option>
            <option value="code">Cloud manager</option>
            <option value="artificial intelligence">Tecnología</option>
            <option value="graphic designer">Diseño gráfico</option>  
          </optgroup>
          <optgroup label='Cuidado de mascotas'>
            <option value="cat">Cuidador de gatos</option>
            <option value="dog">Cuidador de perros</option>
          </optgroup>
          <optgroup label='Marketing y ventas'>
            <option value="Customer Support">Atención al cliente</option>
            <option value="seller">Ventas</option>
            <option value="marketing">Marketing</option>
          </optgroup>
          <optgroup label='Artistas y musicos'>
            <option value="musician">Músicos y artistas</option>
          </optgroup>
          <optgroup label='Educación'>
            <option value="school teacher">Profesores</option>
          </optgroup>
          <optgroup label='Guias'>
            <option value="Travelers Guides">Guía turistico</option>
          </optgroup>
          <optgroup label='Cocina'>
            <option value="chefs">Chefs y cocina</option>
          </optgroup>
          <optgroup label='Animadores'>
            <option value="business event">Animador de eventos</option>
          </optgroup>
          <optgroup label='Otros'>
            <option value="farm">Agricultura</option>
            <option value="sewing box">Costura</option>
            <option value="construction">Construcción</option>
            <option value="others">Otros</option>
          </optgroup>

        </select>
      </label>
      <div className='w-full h-[150px] flex gap-2 overflow-x-scroll'>
       {photo}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mt-4 self-center block"
      >
        Crear publicación
      </button>
     
    </form>
  );
};

export { PostForm};
