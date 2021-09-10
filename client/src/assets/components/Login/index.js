
import React from 'react'
import logo from '../../img/pokeapi_256.png'

const Login = () => {
    return (
    <div className="h-screen bg-gray-200 p-6 flex flex-wrap content-center">
      <div className="bg-gray-100 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-x-4">
        <div className="p-2">
          <img alt="PokéAPI" src={logo}></img>
        </div>
        <div className="p-2">
          <div className="p-1">
            <input type='text' placeholder="Login" className="px-1 border rounded-xl shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></input>
          </div>
          <div className="p-1">
            <input type='password' placeholder="Password" className="px-1 border rounded-xl shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></input>
          </div>
        </div>
        <div>
          <button className="text-white bg-blue-800 hover:bg-blue-900 rounded-xl p-3 px-12">Login</button>
        </div>
        <div className="p-2">
          <a href='./signup' className="text-blue-800 hover:text-blue-900  underline ">Sign Up</a>
        </div>
      </div>
    </div>
    );
}

export default Login;