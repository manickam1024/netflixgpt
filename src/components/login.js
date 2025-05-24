import { useState, useEffect } from 'react'
import { validate } from '../utils/validation'
import { useRef } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import firebaseConfig from '../utils/Firebase'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { additem, removeitem } from '../utils/slice'

const Login = () => {
  const [signin, setsignin] = useState(true)

  const [msg, setMsg] = useState()

  const email = useRef(null)
  const password = useRef(null)
  const username = useRef(null)
  const reenterpassword = useRef(null)
  const Navigate = useNavigate()
  const auth = getAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(additem({ email, uid, displayName, photoURL }))
      } else {
        dispatch(removeitem())
      }
    })

    // ✅ Clean up the listener
    return () => unsubscribe()
  }, [])

  // subscribing to the redux store
  const read = useSelector((store) => store.authentication.items)

  function handleclick() {
    const result = validate(email.current.value, password.current.value)

    const auth = getAuth()
    setMsg(result)

    //firebase method for signin
    {
      signin &&
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user
            Navigate('/home')
          })
          .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message

            setMsg('wrong username or password')
          })
    }

    //sign up evaluation
    if (!signin && password.current.value != reenterpassword.current.value) {
      setMsg('password does not match')
    }
    //firebase signup evaluation
    {
      !signin &&
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user
            updateProfile(user, {
              displayName: username.current.value,
              photoURL: 'https://example.com/jane-q-user/profile.jpg',
            })

            window.alert('user succesfully signed up')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            // ..
          })
    }
  }

  return (
    <div>
      {' '}
      <div className="absolute overflow-hidden">
        {' '}
        <img
          className="overflow-hidden h-screen w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg"
          alt=""
        />
      </div>
      <div
        id="loginform"
        style={{ height: 'max-content ' }}
        className="w-96 bg-black absolute left-0 right-0 top-0 bottom-0 my-auto mx-auto rounded-2xl bg-opacity-80 pb-8"
      >
        <h1 className="text-white text-3xl p-12 pl-12 font-bold">
          {' '}
          {signin ? ' Login' : 'Signup'}
        </h1>
        <form className="p-5 pl-12  ">
          {' '}
          <input
            ref={email}
            type="text"
            name="email"
            id="email"
            className=" p-2 w-72 mb-8 rounded-sm bg-transparent border-gray-500 border-2 text-gray-400"
            placeholder="email"
            required
          />{' '}
          <br />
          <input
            ref={password}
            type="password"
            name="password"
            placeholder="password"
            className=" p-2 w-72 mb-8 rounded-sm bg-transparent  border-gray-500 border-2  text-gray-400"
            required
          />
          {!signin && (
            <input
              ref={reenterpassword}
              type="password"
              name="reenterpassword"
              placeholder="Re-enter password"
              className=" p-2 w-72 mb-6 rounded-sm bg-transparent  border-gray-500 border-2  text-gray-400"
              required
            />
          )}
          {!signin && (
            <input
              ref={username}
              type="text"
              name="name"
              placeholder="ENTER FULL NAME"
              className=" p-2 w-72 mb-6 rounded-sm bg-transparent  border-gray-500 border-2  text-gray-400"
              required
            />
          )}
          <p className="text-red-600 pb-5">{msg}</p>
          <button
            className="bg-red-600 w-72 p-2 rounded-xl text-white font-bold"
            onClick={function (event) {
              event.preventDefault()
              handleclick()
            }}
          >
            {signin ? ' login' : 'signup'}
          </button>
          <button
            className="  text-white font-bold mt-5"
            onClick={function (event) {
              event.preventDefault() // stops default reloading of page because its in form
              setsignin(!signin)
            }}
          >
            {signin ? 'New user ? just sign up' : 'Existing user? sign in '}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
