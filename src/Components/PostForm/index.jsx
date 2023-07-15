import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase';

const PostForm = (props) => {
  const [formData, setFormData] = useState({
    author: props.user.uid || '',
    offer: '',
    city: '',
    date:new Date().getTime(),
    salary: '',
    image: '',
    title: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
