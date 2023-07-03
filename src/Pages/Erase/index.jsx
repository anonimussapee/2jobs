import { useState } from 'react';

const Erase= () => {
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);

  const handleEliminarDatos = () => {
    // Aquí iría la lógica para enviar la solicitud de eliminación de datos al servidor
    // Esto podría implicar una llamada a una API o realizar alguna acción en el backend

    // Simulación de la solicitud enviada (aquí puedes modificar según tu lógica)
    setSolicitudEnviada(true);
  };

  return (
    <div>
      {solicitudEnviada ? (
        <p>Tu solicitud de eliminación de datos ha sido enviada y será procesada en un plazo de 30 días.</p>
      ) : (
        <div>
          <p>Al hacer clic en el siguiente botón, se enviará una solicitud para eliminar tus datos personales de TwoJobs.</p>
          <button onClick={handleEliminarDatos}>Eliminar mis datos personales</button>
        </div>
      )}
    </div>
  );
};


export {Erase}