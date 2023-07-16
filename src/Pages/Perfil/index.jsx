import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../Components/Firebase/index.jsx';
import {  useNavigate } from 'react-router-dom';

const Perfil = (props) => {
  
  const navigate = useNavigate();

  let thisUser = props.usersDt.find(item=>item.uid===props.user.uid)
  thisUser= thisUser===undefined? props.user : thisUser
  
  const [formData, setFormData] = useState({
    displayName: thisUser.displayName || '',
    photoURL: thisUser.photoURL || '',
    age: thisUser.age || 18,
    phone: thisUser.phone || '',
    profession: thisUser.profession || '',
    interests: thisUser.interests || '',
    banner: thisUser.banner || 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userRef = doc(db, 'users', thisUser.uid);
      await updateDoc(userRef, formData);

      console.log('Datos del usuario actualizados correctamente');
      props.setSincronize(false)
      navigate('/')
    } catch (error) {
      console.error('Error al actualizar los datos del usuario', error);
    }
  };

  return (
    <>
      <div className="w-full max-w-[480px] h-[250px] img relative flex justify-center items-center rounded-xl"  style={{backgroundImage:`url(${formData.banner || 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})`}}>
        <img src={formData.photoURL} alt="Image Avatar" className='w-[200px] h-[200px] rounded-full border-white border-[2px] object-cover'/>
      </div>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4 md:p-8 bg-gray-100 rounded-lg">
        <label className="block mb-4">
          Nombre de usuario:
          <input
            type="text"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
          />
        </label>
        <label className="block mb-4">
          Url de la imagen que sera tu avatar:
          <input
            type="text"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
          />
        </label>
        <label className="block mb-4">
          Url de la imagen que sera tu Banner
          <input
            type="text"
            name="banner"
            value={formData.banner}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
          />
        </label>
        <label className="block mb-4">
          Edad:
          <input
            type="number"
            name="age"
            value={formData.age}
            min={18}
            max={80}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
          />
        </label>
        <label className="block mb-4">
          Celular:
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
          />
        </label>
        <label className="block mb-4">
          Profesión:
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
          />
        </label>
        <label className="block mb-4">
          Intereses:
          <textarea
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mt-4"
        >
          Guardar cambios
        </button>
      </form>
    </>
  );
};

export { Perfil };
