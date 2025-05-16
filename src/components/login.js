import { useState } from 'react'
import { defer } from 'react-router-dom'

const Login = () => {
  const [signup, setsignup] = useState(true)

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
          {signup ? ' Login' : 'Signup'}
        </h1>
        <form className="p-5 pl-12  ">
          {' '}
          <input
            type="text"
            name="username"
            id="username"
            className=" p-2 w-72 mb-8 rounded-sm bg-transparent border-gray-500 border-2 text-gray-400"
            placeholder="username"
          />{' '}
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            className=" p-2 w-72 mb-8 rounded-sm bg-transparent  border-gray-500 border-2  text-gray-400"
          />
          {!signup && (
            <input
              type="password"
              name="reenterpassword"
              placeholder="Re-enter password"
              className=" p-2 w-72 mb-8 rounded-sm bg-transparent  border-gray-500 border-2"
            />
          )}
          <button className="bg-red-600 w-72 p-2 rounded-xl text-white font-bold">
            {signup ? ' login' : 'signup'}
          </button>
          <button
            className="  text-white font-bold mt-5"
            onClick={function (event) {
              event.preventDefault() // stops default reloading of page because its in form
              setsignup(!signup)
            }}
          >
            {signup ? 'New user ? just sign up' : 'Existing user? sign in '}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
