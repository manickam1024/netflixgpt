import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { useSelector } from 'react-redux'

export const Home = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  const data = useSelector((stor) => stor.authentication.items)
  function handlesignout() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
  }
  function nextpage() {
    navigate('/body')
  }

  return (
    <div className="relative top-14">
      <h1>Welcome home {data[0]?.displayName}</h1>
      <button onClick={handlesignout}>Sign Out</button>
      <br />
      <button onClick={nextpage}>next page </button>
    </div>
  )
}
