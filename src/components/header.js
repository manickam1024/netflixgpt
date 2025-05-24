import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { additem, removeitem } from '../utils/slice'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { useSelector } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth()
  const data = useSelector((stor) => stor.authentication.items)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(additem({ email, uid, displayName, photoURL }))
        navigate('/browse')
      } else {
        dispatch(removeitem())
        navigate('/login')
      }
    })

    // ✅ Clean up the listener
    return () => unsubscribe()
  }, [])

  function handlesignout() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
  }
  return (
    <div className="h-16 w-full bg-gradient-to-b from-black flex-col absolute">
      <div>
        <h1>Welcome home {data[0]?.displayName}!!</h1>
        <button onClick={handlesignout}>Sign Out</button>
        <br />
      </div>
    </div>
  )
}

export default Header
