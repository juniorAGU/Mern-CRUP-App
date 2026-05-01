import React from 'react'
import { useState,useContext} from 'react';
import { authContext } from '../Context/Authcontext';

function EditProduct({ onclose, id}) {
    const {  Edit } = useContext(authContext);
    const [messages,setMessages] = useState(null);
    const [datas,setDatas] = useState({
        name: "",
        Description: "",
        price: "",
        loading: false

    })
    const handleChange = (e) => {
        const { name,value} = e.target;
        setDatas({...datas,[name]:value})
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

        if(datas.name === "" || datas.price === "" || datas.Description === ""){
            showMessage("failed", "Fields must not be empty")
            return
        }
        setDatas({...datas,loading: true})
        try{
            const newdata ={
                name: datas.name,
                Description: datas.Description,
                price: datas.price
            }
            const success = await Edit(newdata, id);
                if(success){
                    setDatas({
                        name: "",
                        Description: "",
                        price: "",
                        loading: false
                    })
                    onclose()
                }
        }catch(err){
            throw new Error(err.message)
        }
        

    }
    return (
        <article className="inner bg-white w-full max-w-md rounded-2xl p-8 shadow-xl">
            <header className="mb-4">
                <h2 className=" h1 text-xl font-bold text-[#2c1a0e]"> Edit Product</h2>
            </header>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            
            <div className="flex flex-col gap-1.5">
            <label htmlFor="title" className="h1 text-xs font-semibold text-[#2c1a0e] tracking-wide uppercase">
                Name / Title
            </label>
            <input
                name='name'
                value={datas.name}
                onChange={handleChange}
                id="title" type="text" placeholder="e.g. Dog Shampoo"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50
                text-sm text-[#2c1a0e] placeholder-gray-300 outline-none
                focus:border-[#c8845a] focus:ring-2 focus:ring-[#c8845a]/20 transition-all duration-200"
            />
            </div>

            
            <div className="flex flex-col gap-1.5">
            <label htmlFor="desc" className="h1 text-xs font-semibold text-[#2c1a0e] tracking-wide uppercase">
                Description
            </label>
            <textarea
                name='Description'
                value={datas.Description}
                onChange={handleChange}
                id="desc"  placeholder="Describe the product..."
                className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-gray-50
                text-sm text-[#2c1a0e] placeholder-gray-300 outline-none resize-none
                focus:border-[#c8845a] focus:ring-2 focus:ring-[#c8845a]/20 transition-all duration-200"
            />
            </div>

            
            
            <div className="flex flex-col gap-1.5">
            <label htmlFor="price" className="h1 text-xs font-semibold text-[#2c1a0e] tracking-wide uppercase">
                Price
            </label>
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[#c8845a]">
                $
                </span>
                <input
                name='price'
                onChange={handleChange}
                value={datas.price}
                id="price" type="number" placeholder="0.00"
                className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50
                    text-sm text-[#2c1a0e] placeholder-gray-300 outline-none
                    focus:border-[#c8845a] focus:ring-2 focus:ring-[#c8845a]/20 transition-all duration-200"
                />
            </div>
            </div>

            
            <footer className="flex gap-3 mt-2">
            <button onClick={onclose}
                type="button"
                className="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-semibold
                text-gray-500 hover:bg-gray-100 transition-all duration-200"
            >
                Cancel
            </button>
            <button
                type="submit"
                disabled={datas.loading}
                className={`flex-1 py-3 rounded-xl bg-[#c8845a] hover:bg-[#a0622e] 
                text-white text-sm font-semibold transition-all duration-200 active:scale-95 ${datas.loading ? "cursor-not-allowed bg-gray-200 hover:bg-gray-200" : ""}`}
            >
                {datas.loading ? "Editing..." : "Edit"}
            </button>
            </footer>

        </form>
        {
                messages && (
                    <div className={`slider fixed top-4 right-4 text-black font-bold px-4 py-2 rounded bg-red-600${typColo[messages.type]} `}>
                        <h1 className='h1'>
                            {messages.message}
                        </h1>
                    </div>
                )
        }

        </article>
    )
}

export default EditProduct