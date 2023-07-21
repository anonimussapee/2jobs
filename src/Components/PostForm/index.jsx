import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import './postForm.css'

const PostForm = (props) => {
  const [formData, setFormData] = useState({
    author: props.user.uid || '',
    offer: '',
    city: '',
    date: new Date().getTime(),
    salary: '',
    image: 'https://images.pexels.com/photos/5673507/pexels-photo-5673507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Eliminamos el valor predeterminado para la imagen
    title: '',
  });


  const navigate =  useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataWithNewDate = {...formData, date: new Date().getTime()}
      await addDoc(collection(db, 'posts'), formDataWithNewDate);
      console.log('Publicación creada correctamente');
      props.setNewPost(false)
      
    } catch (error) {
      console.error('Error al crear la publicación', error);
    }
    navigate('/home')
    // Reiniciar el formulario después de la creación
    setFormData({
      author: '',
      offer: '',
      city: '',
      salary: '',
      image: 'https://images.pexels.com/photos/5673507/pexels-photo-5673507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '',
    });
  };

 
  return (
    <>
      <div className='w-[90%] min-w-[300px] max-w-[480px] smMax:h-[30vh] overflow-y-scroll flex flex-col items-start bg-gray-200 border-[1px] text-[1.3rem] rounded-xl mb-3 p-2 scrollNone'>
        <div className=' flex items-center gap-5 self-start'>
          <img src={props.user.photoURL } alt={props.user.displayName} className='w-10 h-10 rounded-full' />
          <p className=' font-bold text-black text-left'>{props.user.displayName}</p>
        </div>
        <h3 className='font-extrabold'>Oferta laboral - {formData.title || ''}</h3>
      
        <img loading='lazy' src={`${formData.image}`} alt={formData.title || 'imagen de evento tal'} className='w-[100%] min-w-[270px] max-w-[420px] h-[150px] smMax:h-[100px] rounded-xl self-center' />
        <p className='w-[90%] min-w-[280px] max-w-[600px] h-auto  font-bold'>Contenido de la Oferta</p>
        <p className='w-[90%] min-w-[280px] max-w-[600px] h-auto  '>{formData.offer}</p>
        <p><strong>Salario estimado: </strong>$ {(Number(formData.salary)).toFixed(2)} </p>
        <p><strong>Lugar: </strong> {formData.city}</p>       
      </div>
  
    <form onSubmit={handleSubmit} className=" flex flex-col max-w-3xl mx-auto p-4 md:p-8 bg-gray-100 rounded-lg smMax:h-[55vh] overflow-y-scroll scrollNone py-14">
      
      <label className="block mb-1">
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
      <label className="block mb-1">
        Descripción de la oferta laboral:
        <textarea
          name="offer"
          value={formData.offer}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
        />
      </label>
      <label className="block mb-1">
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
      <label className="block mb-1">
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
      <label className="block mb-1">
        Ingresa el URL de una imagen que represente tu propuesta:
        <input
          required
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
        />
      </label> 

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mt-4 self-center block"
      >
        Crear publicación
      </button>
     
    </form>
    </>
  );
};

export { PostForm};
