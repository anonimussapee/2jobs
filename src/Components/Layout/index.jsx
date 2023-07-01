
const Layout = (props) => {
  return (
    <section className='mt-[5rem] flex flex-col w-[100%] items-center text-[1.9rem] py-10'>
    {props.children}
    </section>
  )
}
export {Layout}