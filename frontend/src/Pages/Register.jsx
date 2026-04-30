import React from 'react';
import { useState,useContext } from 'react';
import { authContext } from '../Context/Authcontext';
import { Link, useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate()
    const { Register} = useContext(authContext)
    const [messages,setMessages] = useState(null)
    const [dataset, setDataset] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        loading: false
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setDataset({
            ...dataset,
            [name]:value
        })
    }
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(dataset.name === "" || dataset.email === "" || dataset.password === "" || dataset.confirmpassword === ""){
            showMessage("failed", "Please Ensure that you put All your details !!!")
            return;
        }

        if(dataset.password.length < 6 || dataset.confirmpassword.length < 6){
            showMessage("warning", "Password must be more than 6 !!!")
            return
        }
        if(!/[A-Z]/.test(dataset.password)){
            showMessage("warning", "password too easy, must contain UpperCase/numbers/specail charaters")
            return;
        }
        if(dataset.password !== dataset.confirmpassword){
            showMessage("failed", "Password do not match")
            return
        }

        setDataset({...dataset,loading: true})
        try{
            const newdata ={
                name: dataset.name,
                email: dataset.email,
                password: dataset.password,
                confirmpassword: dataset.confirmpassword
            }

            // send to context
            const success = await Register(newdata);

            if(success){
                setDataset({
                    name: "",
                    email: "",
                    password: "",
                    confirmpassword: "",
                    loading: false
                })
                navigate("/")
            }


        }catch(err){
            console.log(err.message)
        }

    }


    return (
        <section className='flex justify-center items-center min-h-screen px-4'>
            <article className='w-full max-w-md'>
                <header className="mb-8">
                    <span className="text-xs tracking-widest uppercase text-[#c8845a] font-semibold">
                        PawCare
                    </span>
                    <h1 className="text-2xl font-bold text-[#2c1a0e] mt-2 leading-snug">
                        Create your account
                    </h1>
                    <p className="text-sm text-[#9a7b65] mt-1">
                        Already have an account?{" "}
                        <Link to={'/login'} className="text-[#c8845a] hover:underline font-semibold">
                            Sign in
                        </Link>
                    </p>
                </header>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label
                            htmlFor="name"
                            className="text-xs font-semibold text-[#2c1a0e] tracking-wide uppercase"
                            >
                            Full Name
                            </label>
                            <input
                            name='name'
                            onChange={handleChange}
                            value={dataset.name}
                            required
                            id="name"
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-3 rounded-xl border border-[#f5ede0] bg-[#fdf8f3]
                                text-sm text-[#2c1a0e] placeholder-[#c8b09a] outline-none
                                focus:border-[#c8845a] focus:ring-2 focus:ring-[#c8845a]/20
                                transition-all duration-200"
                            />
                        </div>
                
                
                        <div className="flex flex-col gap-1.5">
                            <label
                            htmlFor="email"
                            className="text-xs font-semibold text-[#2c1a0e] tracking-wide uppercase"
                            >
                            Email Address
                            </label>
                            <input
                            name='email'
                            onChange={handleChange}
                            value={dataset.email}
                            required
                            id="email"
                            type="email"
                            placeholder="Example@gmail.com"
                            className="w-full px-4 py-3 rounded-xl border border-[#f5ede0] bg-[#fdf8f3]
                                text-sm text-[#2c1a0e] placeholder-[#c8b09a] outline-none
                                focus:border-[#c8845a] focus:ring-2 focus:ring-[#c8845a]/20
                                transition-all duration-200"
                            />
                        </div>
                
                
                        <div className="flex flex-col gap-1.5">
                            <label
                            htmlFor="password"
                            className="text-xs font-semibold text-[#2c1a0e] tracking-wide uppercase"
                            >
                            Password
                            </label>
                            <input
                            name='password'
                            onChange={handleChange}
                            value={dataset.password}
                            id="password"
                            type="password"
                            required
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl border border-[#f5ede0] bg-[#fdf8f3]
                                text-sm text-[#2c1a0e] placeholder-[#c8b09a] outline-none
                                focus:border-[#c8845a] focus:ring-2 focus:ring-[#c8845a]/20
                                transition-all duration-200"
                            />
                        </div>
                
                    
                        <div className="flex flex-col gap-1.5">
                            <label
                            htmlFor="confirm-password"
                            className="text-xs font-semibold text-[#2c1a0e] tracking-wide uppercase"
                            >
                            Confirm Password
                            </label>
                            <input
                            name='confirmpassword'
                            onChange={handleChange}
                            value={dataset.confirmpassword}
                            id="confirm-password"
                            required
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl border border-[#f5ede0] bg-[#fdf8f3]
                                text-sm text-[#2c1a0e] placeholder-[#c8b09a] outline-none
                                focus:border-[#c8845a] focus:ring-2 focus:ring-[#c8845a]/20
                                transition-all duration-200"
                            />
                        </div>
                
                        
                        <button
                            type="submit"
                            disabled={dataset.loading}
                            className={`w-full bg-[#c8845a] hover:bg-[#a0622e] text-white
                            font-semibold text-sm py-3 rounded-xl mt-2
                            transition-colors duration-200 tracking-wide ${dataset.loading ? "cursor-not-allowed bg-gray-200 hover:bg-slate-200" : ""}`}
                        >
                            { dataset.loading ? "Creating..." : "Create Account"}
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
    )
}

export default Register