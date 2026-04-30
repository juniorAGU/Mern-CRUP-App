import React from 'react'
import { useState,useContext } from 'react';
import { authContext } from '../Context/Authcontext';
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const { login } = useContext(authContext)
    const [messages,setMessages] = useState(null)
    const [data, setdata] = useState({
        email: "",
        password: "",
        loading: false
    })
    const typColo = {
        "success": "bg-green-700",
        "warning": "bg-yellow-400",
        "failed": "bg-red-500"
    }
    const showMessage = (type,message) => {
        setMessages( { type, message} )
        setTimeout(() => {
            setMessages(null)
        },3000)
    }
    const handleChange = (e) => {
        const { name,value } = e.target;
        setdata({
            ...data,
            [name]:value
        })
    };
    const handleSubmit = async (e) => {
        e.preventDefault();


        if(data.password.length < 6 ){
            showMessage("failed", "Password must be more than 6 !!!")
            return
        }
        if(!/[A-Z]/.test(data.password)){
            showMessage("warning", "password too easy, must contain UpperCase/numbers/specail charaters")
            return;
        }

        if(data.email === "" || data.password === ""){
            showMessage("failed", "Ensure that you put all your Details")
            return
        }
        
        const email = data.email
        const password = data.password
        
        setdata({...data,loading: true})
        try{
            // add to contex
            const success = login( email, password);
            if(success){
                setdata({email: "",password: "",loading: false})
                navigate('/')
            }
        }catch(err){
            console.log(err.message)
        }
    }

    return (
    <section className="flex justify-center items-center min-h-screen px-4">
        <article className="w-full max-w-md">

        
            <header className="mb-8">
            <span className="text-xs tracking-widest uppercase text-[#c8845a] font-semibold">
                PawCare
            </span>
            <h1 className="text-2xl font-bold text-[#2c1a0e] mt-2 leading-snug">
                Welcome back
            </h1>
            <p className="text-sm text-[#9a7b65] mt-1">
                Don't have an account?{" "}
                <a href="/register" className="text-[#c8845a] hover:underline font-semibold">
                Sign up
                </a>
            </p>
            </header>

    
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

    
            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-[#2c1a0e] tracking-wide uppercase">
                Email Address
                </label>
                <input
                name='email'
                value={data.email}
                onChange={handleChange}
                required
                id="email" type="email" placeholder="Example@gmail.com"
                className="w-full px-4 py-3 rounded-xl border border-[#f5ede0] bg-[#fdf8f3]
                    text-sm text-[#2c1a0e] placeholder-[#c8b09a] outline-none
                    focus:border-[#c8845a] focus:ring-2 focus:ring-[#c8845a]/20 transition-all duration-200"
                />
            </div>

            
            <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-xs font-semibold text-[#2c1a0e] tracking-wide uppercase">
                    Password
                </label>
                <a href="/forgot-password" className="text-xs text-[#c8845a] hover:underline font-semibold">
                    Forgot password?
                </a>
                </div>
                <input
                name='password'
                onChange={handleChange}
                value={data.password}
                required
                id="password" type="password" placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-[#f5ede0] bg-[#fdf8f3]
                    text-sm text-[#2c1a0e] placeholder-[#c8b09a] outline-none
                    focus:border-[#c8845a] focus:ring-2 focus:ring-[#c8845a]/20 transition-all duration-200"
                />
            </div>

            
            <button
                type="submit"
                disabled={data.loading}
                className={`w-full bg-[#c8845a] hover:bg-[#a0622e] text-white
                font-semibold text-sm py-3 rounded-xl mt-2
                transition-colors duration-200 tracking-wide ${data.loading ? "cursor-not-allowed bg-gray-200 hover:bg-gray-200" : ""}`}
            >
                { data.loading ? "Sining in ..." : "Sign In"}
            </button>

            </form>
        </article>
        {
            messages && (
                    <div className={`slider fixed top-4 right-4 text-white px-4 py-2 rounded ${typColo[messages.type]} `}>
                        <h1>
                            {messages.message}
                        </h1>
                    </div>
            )
        }
        </section>
    );
}

export default Login