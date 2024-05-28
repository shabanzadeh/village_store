import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";

import {auth} from "../../api/firebase";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [click, setClick] = useState(false);
    const handelLogin = (e: any)=>{
        e.preventDefault();
       
 
 
    
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={e=>setPassword(e.target.value)}/>
                </div>
                <div className="flex items-center justify-between ">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit" onClick={()=>setClick(!click)}>
                        Sign In
                    </button>
                </div>
                {error &&<span className="text-red-500 mt-2 font-size-10"> Wrong email or password!</span>}
            </form>
        </div>
    )
}

export default Login;