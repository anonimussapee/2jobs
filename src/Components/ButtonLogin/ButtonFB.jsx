const ButtonFB = (props) => {
  return (
    <button className="rounded-md text-white font-bold flex items-center  bg-blue-500 hover:bg-blue-600 w-[270px] h-[46px] text-base" onClick={()=>{
      props.loginWithFacebook()
      props.navegate('/')
    }}>
      <span className="w-[100%] h-[100%] flex justify-center items-center">
        <svg viewBox="0 0 213 213" preserveAspectRatio="xMinYMin" className="fb_button_svg_logo login_fb_logo single_button_svg_logo w-14 h-14 ">
          <path d="M90,212v-75h-27v-31h27v-25q0,-40 40,-40q15,0 24,2v26h-14q-16,0 -16,16v21h30l-5,31h-27v75a106 106,0,1,0,-32 0" className="f_logo_circle w-40 h-40" fill="white"></path>
          <path d="M90,212v-75h-27v-31h27v-25q0,-40 40,-40q15,0 24,2v26h-14q-16,0 -16,16v21h30l-5,31h-27v75a106 106,1,0,1,-32 0" className="f_logo_f" fill="#3B82F6"></path>
        </svg>
        <span className='text-[1.6rem] pl-[10px]'>Continuar con Facebook</span>
      </span>
    </button>
  )
}

export {ButtonFB}