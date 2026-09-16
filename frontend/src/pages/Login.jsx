import React from "react";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="min-h-screen flex items-center justify-center   bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">Shipflow</h2>
            <h2 className="text-2xl  text-center text-gray-600 mb-6"> Welcome Back!</h2>
           <form className="space-y-5">
            <div>
                <label className="block font-semibold text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="Enter your email" className="w-full border border-gray-300  rounded-lg px-3 py-3 outline-none focus:border-blue-500"/>
            </div>
            <div>
                <label className="block font-semibold text-gray-700 mb-2">Password</label>
                <input type="password" placeholder="Enter your password" className="w-full border border-gray-300 rounded-lg px-3 py-3 outline-none focus:border-blue-500"/>
            </div>
           <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700        transition">Login</button>
           </form>
            <p className="text-centertext-gray-700 mt-4">Don't have an account?{""}
            <Link to="/register"className="font-semibold text-blue-600 cursor-pointer hover:underline">Register here</Link></p>
            </div>
        </div>
    )
}

export default Login;