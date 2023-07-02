const PostList = (props) => {
  return (
    <section className='w-[100%] h-auto flex flex-col gap-5 items-center'>
      { props.list.map(props.render)}
    </section>
  )
}
export {PostList}