
import React from 'react'
import logo from './img/pokeapi_256.png'
import Card from '../components/Card';

const Login = () => {
    return (
    <Card>
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
  </Card>
    );
}

export default Login;