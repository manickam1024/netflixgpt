import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { additem, removeitem } from './utils/slice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Red = () => {
  const auth = getAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    // redux store actions

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        // dispatch(additem(email.current.value, password.current.value))
        console.log(user)
        // ...
      } else {
        // dispatch(removeitem(email.current.value, password.current.value))
      }
    })
  }, [])
}

// subscribing to the redux store
const read = useSelector((store) => store.authentication.items)
console.log(read)

export default Red
