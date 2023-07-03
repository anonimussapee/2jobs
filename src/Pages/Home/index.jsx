import { CardPost } from '../../Components/CardPost'
import { CardUserIntro } from '../../Components/CardUserIntro'
import { PostList } from '../../Components/PostList'

const Home = ({user}) => {
  let list = [
    {id:1,title:'evento anonimo', date:'12-08-23', urlImg:'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae numquam autem magnam quasi, ipsam ut veniam animi deleniti dolores beatae soluta ducimus amet sapiente ullam, laboriosam voluptatum qui. In.'}, {id:2,title:'evento anonimo', date:'12-08-23', urlImg:'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae numquam autem magnam quasi, ipsam ut veniam animi deleniti dolores beatae soluta ducimus amet sapiente ullam, laboriosam voluptatum qui. In.'}, {id:3,title:'evento anonimo', date:'12-08-23', urlImg:'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae numquam autem magnam quasi, ipsam ut veniam animi deleniti dolores beatae soluta ducimus amet sapiente ullam, laboriosam voluptatum qui. In.'}, {id:4,title:'evento anonimo', date:'12-08-23', urlImg:'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae numquam autem magnam quasi, ipsam ut veniam animi deleniti dolores beatae soluta ducimus amet sapiente ullam, laboriosam voluptatum qui. In.'},
  ]
  return (
    <section className='w-[90%] min-w-[320px] flex flex-col  items-center'>
      <CardUserIntro user={user}/>
      
      <PostList list={list} render={item=><CardPost key={item.id} title={item.title} date={item.date} urlImg={item.urlImg} description={item.description} />}/>
    </section>
  )
}
export {Home}