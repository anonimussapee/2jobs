import './icon.css'

const ButtonLogin = (props) => {
  return (
    <button onClick={()=>{
      props.loginWithGoogle()
      props.navegate('/')
    }} className={`w-[270px] h-[46px] flex items-center rounded-lg ${props.bghover} ${props.bg} `} > 
    <img src={props.icon} alt="" className=' pr-[24px]'/>
    <p className='font--icon  '>
      Inicia sesión con {props.name}
    </p>    
    </button> 
  )
}
export {ButtonLogin}