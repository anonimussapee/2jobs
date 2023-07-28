import { useParams } from 'react-router-dom'
import './perfils.css';
const Perfils = (props) => {

  const {slug} = useParams()


  console.log(props.usersDt);


  const slugName =props.usersDt.find(item=>item.uid===slug)

  return (
    <div className='w-[90%] min-w-[280px] w-max-[550px] my-0 mx-auto flex flex-col gap-5'>
      <div className='img banner--perfils relative w-full h-[180px] rounded-3xl' style={{backgroundImage:`url(${slugName?.banner || 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})`}}>

        <img src={slugName?.photoURL} alt={slugName?.displayNmae} className='photoIndex w-[150px] h-[150px] rounded-full absolute border-white border-[3px] ' />
      </div>
      <h2 className='font-extrabold'>
        {slugName?.displayName}
      </h2>
      <p className='font-medium'>
        {
          slugName?.interests
        }
      </p>
    </div>
  );

}

export {Perfils}