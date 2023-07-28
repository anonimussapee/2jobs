const PostList = (props) => {
  return (
    <section className='w-[100%] h-auto flex flex-col justify-center items-center gap-10 '>
      { props?.list?.map(props.render)}
    </section>
  )
}
export {PostList}