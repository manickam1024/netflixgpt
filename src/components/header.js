import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { additem, removeitem } from '../utils/slice'
const Header = () => {
  const dispatch = useDispatch()
  const auth = getAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(additem({ email, uid, displayName, photoURL }))
        navigate('/home')
      } else {
        dispatch(removeitem())
        navigate('/login')
      }
    })

    // ✅ Clean up the listener
    return () => unsubscribe()
  }, [])
  return (
    <div className="h-16 w-full bg-gradient-to-b from-black flex-col absolute"></div>
  )
}

export default Header
