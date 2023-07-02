const CardPost = (props) => {
  return (<div className='w-[80%] min-w-[320px] max-w-[620px] h-auto flex flex-col gap-5 items-center'>
    <h3>{props.title || ''}</h3>
    <p>{props.date || '1 de julio 2023'}</p>
    <img loading='lazy' src={`${props.urlImg}`} alt={props.title || 'imagen de evento tal'} className='w-[90%] min-w-[320px] max-w-[600px] h-[100%]  min-h-[200px] max-h-[250px] ' />
    <p className='w-[90%] min-w-[320px] max-w-[600px] h-auto p-5'>{props.description}</p>
    <div className='w-[90%] h-1 bg-gray-400'></div>
  </div>)
}

export {CardPost} 
