import { useNavigate, useParams } from 'react-router-dom'
import './perfils.css';
const Perfils = (props) => {

  const {slug} = useParams()


  let userPosts = props.dtDb.filter(item=> item.author===slug).sort((a,b)=>{return b.date - a.date})
  console.log(props.dtDb);

  const slugName =props.usersDt.find(item=>item.uid===slug)

  
  // Crear una instancia de Intl.DateTimeFormat con el formato deseado


  const dateReady = (time)=>{
    const date = Number(time)
  
    // Crear una instancia de Intl.DateTimeFormat con el formato deseado
    const dateFormatter = new Intl.DateTimeFormat('es', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  
    // Obtener la fecha formateada
    const data = dateFormatter.format(date)
    return data
    // const formatDate =  date.toLocaleDateString()
  
  }

  const navigate = useNavigate(); 
  return (
    <div className='w-[90%] min-w-[280px] w-max-[550px] my-0 mx-auto flex flex-col gap-5'>
      <div className='img banner--perfils relative w-full h-[180px] rounded-3xl' style={{backgroundImage:`url(${slugName?.banner || 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})`}}>

        <img src={slugName?.photoURL} alt={slugName?.displayName} className='photoIndex w-[150px] h-[150px] rounded-full absolute border-white border-[3px] ' />
      </div>
      <h2 className='font-extrabold'>
        {slugName?.displayName}
      </h2>
      <p className='font-medium'>
        {
          slugName?.interests
        }
      </p>
      
    { slugName &&
      userPosts.map(item=>(
        <div className='card-display w-[90%] min-w-[300px] max-w-[620px] h-auto flex flex-col gap-2 items-start  border-[#cdcdcd7b] border-[3px] p-2 rounded-3xl' key={item.date}>
        <div className=' flex items-center gap-5 self-start ' >
          <img src={slugName.photoURL} alt={slugName.displayName} className='w-16 h-16 rounded-full border-black border-[1px]' />
          <p className=' text-[2rem] font-bold text-black text-left' >{slugName.displayName}</p>
        </div>
        <h3 className='font-extrabold'>Oferta laboral - {item.title || ''}</h3>
        <p className='font-medium text-[1.3rem] '>Fecha del post { dateReady(item.date)}</p>
        {/* <img loading='lazy' src={`${item.seimage}`} alt={item.setitle || 'imagen de evento tal'} className='w-[100%] min-w-[300px] max-w-[620px] h-[100%]  min-h-[200px] max-h-[250px] ' /> */}
        <p className='w-[90%] min-w-[280px] max-w-[600px] h-auto  font-bold'>Contenido de la Oferta</p>
        <p className='w-[90%] min-w-[280px] max-w-[600px] h-auto '>{item.offer}</p>
        <p><strong>Salario estimado: </strong>$ {(Number(item.salary)).toFixed(2)} </p>
        <p><strong>Lugar: </strong> {item.city}</p>
        <div className='btn-container w-[100%] '>
           <button className='btn-card hover:bg-gray-400  bg-gray-500 text-white rounded-xl'>Postular</button>
           <button className='btn-card hover:bg-gray-400  bg-gray-500 text-white rounded-xl'>Observar </button>
           <button className='btn-card hover:bg-gray-400  bg-gray-500 text-white rounded-xl'>Compartir</button>
           <button className='btn-card hover:bg-gray-400  bg-gray-500 text-white rounded-xl'>similares</button> 
        </div>
           
      </div>
      ))
    }

    </div>
  );

}

export {Perfils}