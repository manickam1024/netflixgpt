import { Link } from 'react-router-dom'

const Browse = () => {
  return (
    <>
      <p className=" text-2xl text-red-400  flex justify-center">
        this is a browse page
      </p>
      <Link to="/login" className="text-blue-500 underline relative top-12">
        Login
      </Link>
    </>
  )
}

export default Browse
