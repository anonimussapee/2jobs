import './card.css'

const CardPost = (props) => {

  let userdata = props.usersDt.find(item=> item.uid===props.author)

  userdata= userdata === undefined ? ' ' : userdata

  const date = new Date((props.date.seconds + 1687705552000 ) || Number(props.date ) )
  
  // Crear una instancia de Intl.DateTimeFormat con el formato deseado
  const dateFormatter = new Intl.DateTimeFormat('es', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Obtener la fecha formateada
  const formattedDate = dateFormatter.format(date);
  // const formatDate =  date.toLocaleDateString()

  return (
  <div className='w-[90%] min-w-[300px] max-w-[620px] h-auto flex flex-col gap-5 items-start '>
    <div className=' flex items-center gap-5 self-start'>
      <img src={userdata.photoURL} alt={userdata.displayName} className='w-16 h-16 rounded-full' />
      <p className=' text-[2rem] font-bold text-black text-left'>{userdata.displayName}</p>
    </div>
    <h3 className='font-extrabold'>Oferta laboral - {props.title || ''}</h3>
    <p className='font-normal '>Fecha del post {formattedDate|| '1 de julio 2023'}</p>
    <img loading='lazy' src={`${props.image}`} alt={props.title || 'imagen de evento tal'} className='w-[100%] min-w-[300px] max-w-[620px] h-[100%]  min-h-[200px] max-h-[250px] ' />
    <p className='w-[90%] min-w-[280px] max-w-[600px] h-auto  font-bold'>Contenido de la Oferta</p>
    <p className='w-[90%] min-w-[280px] max-w-[600px] h-auto pb-5 '>{props.offer}</p>
    <p><strong>Salario estimado: </strong>$ {(Number(props.salary)).toFixed(2)} </p>
    <p><strong>Lugar: </strong> {props.city}</p>
    <div className='btn-container w-[100%] '>
       <button className='btn-card hover:bg-gray-400  bg-gray-500 text-white rounded-xl'>Postular</button>
       <button className='btn-card hover:bg-gray-400  bg-gray-500 text-white rounded-xl'>Observar </button>
       <button className='btn-card hover:bg-gray-400  bg-gray-500 text-white rounded-xl'>Compartir</button>
       <button className='btn-card hover:bg-gray-400  bg-gray-500 text-white rounded-xl'>similares</button> 
    </div>
       
  </div>
  )
}

export {CardPost} 
