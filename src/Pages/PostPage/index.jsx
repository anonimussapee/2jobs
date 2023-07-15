import { PostForm } from '../../Components/PostForm'

const PostPage = (props) => {


  return (
    <section className='w-[90%] min-w-[320px] flex flex-col  items-center'>
      <PostForm user={props.user}/>
    </section>
  )
}
export {PostPage} 