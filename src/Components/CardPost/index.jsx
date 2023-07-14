const CardPost = (props) => {


  const date = new Date(props.date.seconds + 1687705552000  )
  
  // Crear una instancia de Intl.DateTimeFormat con el formato deseado
  const dateFormatter = new Intl.DateTimeFormat('es', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Obtener la fecha formateada
  const formattedDate = dateFormatter.format(date);
  // const formatDate =  date.toLocaleDateString()

  return (<div className='w-[80%] min-w-[300px] max-w-[620px] h-auto flex flex-col gap-5 items-start'>
    <div className='flex items-center gap-5'>
      <img src={props.image} alt={props.author} className='w-16 h-16 rounded-full' />
      <p className='text-[2rem] font-bold text-black text-left'>{props.author}</p>
    </div>
    <h3>{props.title || ''}</h3>
    <p>{formattedDate|| '1 de julio 2023'}</p>
    <img loading='lazy' src={`${props.image}`} alt={props.title || 'imagen de evento tal'} className='w-[90%] min-w-[288px] max-w-[600px] h-[100%]  min-h-[200px] max-h-[250px] ' />
    <p className='w-[90%] min-w-[280px] max-w-[600px] h-auto p-5'>{props.offer}</p>
    <p><strong>Salario estimado: </strong>$ {(props.salary).toFixed(2)} </p>
    <p><strong>Lugar: </strong> {props.city}</p>
    <div className='w-[90%] h-1 bg-gray-400'>
     
    </div>
  </div>)
}

export {CardPost} 
