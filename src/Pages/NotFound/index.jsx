import React from 'react';
import astro from '../../assets/artbreeder-image.png'

const NotFound= () => {
  return (
    <section className=' text-center'>

      <img src={astro} alt="notfound"  />
      <h1 className='font-extrabold text-[3rem]'>Loco no encontre nada...</h1>
    </section>
  );
};



export  {NotFound};
