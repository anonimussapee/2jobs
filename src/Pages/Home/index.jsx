import { useEffect, useState } from 'react'
import { CardPost } from '../../Components/CardPost'
import { CardUserIntro } from '../../Components/CardUserIntro'
import { PostList } from '../../Components/PostList'

const Home = ({user,dtDb}) => {


  return (
    <section className='w-[90%] min-w-[320px] flex flex-col  items-center'>
      <CardUserIntro user={user}/>
      
      <PostList list={dtDb} render={item=><CardPost key={item.offer} title={item.title} date={item.date} image={item.image} offer={item.offer} city={item.city} salary={item.salary} author={item.author} /> } />
    </section>
  )
}
export {Home}