import React from 'react'
import { useState,useContext } from 'react';
import { authContext } from '../Context/Authcontext';

function SubmitForm( {onclose }) {
    const { ProductData } = useContext(authContext);
    const [messages,setMessages] = useState(null);
    const [preview, setPreview] = useState(null);
    const [datas,setDatas] = useState({
        name: "",
        Description: "",
        image: null,
        price: "",
        loading: false
    })
    const handleChange = (e) => {
        const {name,value} = e.target;
        setDatas({...datas, [name]:value})
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(!file) return
        setDatas({...datas,image: file});
        setPreview(URL.createObjectURL(file))
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

        if(datas.name === "" || datas.Description === "" || datas.image === null || datas.price === ""){
            showMessage("failed", "Please Ensure that you put All your details !!!")
            return;
        }
        setDatas({...datas,loading: true})
        try{
            const newdata = {
                name: datas.name,
                Description: datas.Description,
                image: datas.image,
                price: datas.price
            }
            const success = await ProductData(newdata);
            if(success){
                setDatas({ 
                    name: "",
                    Description: "",
                    image: null,
                    price: "",
                    loading: false
                })

                onclose()
            }

        }catch(err){
            console.log(err.message)
        }finally{
            setDatas(prev => ({...prev,loading: false}))
        }
    }
    return (
        <article className="inner bg-white w-full max-w-md rounded-2xl p-8 shadow-xl">
        <header className="mb-4">
            <h2 className="text-xl font-bold text-[#2c1a0e]">Add New Product</h2>
            <p className="text-xs text-gray-400 mt-1">Fill in the details below</p>
        </header>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            
            <div className="flex flex-col gap-1.5">
            <label htmlFor="title" className="text-xs font-semibold text-[#2c1a0e] tracking-wide uppercase">
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
            <label htmlFor="desc" className="text-xs font-semibold text-[#2c1a0e] tracking-wide uppercase">
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
            <label htmlFor="image" className="text-xs font-semibold text-[#2c1a0e] tracking-wide uppercase">
                Image
            </label>
            <input
                name='image'
                onChange={handleImageChange}
                id="image" type="file" accept="image/*"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50
                text-sm text-gray-400 outline-none cursor-pointer
                focus:border-[#c8845a] focus:ring-2 focus:ring-[#c8845a]/20 transition-all duration-200
                file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0
                file:text-xs file:font-semibold file:bg-[#c8845a] file:text-white
                hover:file:bg-[#a0622e]"
            />
            </div>

            {/* Image Preview */}
            <figure className="w-full h-40 rounded-xl border-2 border-dashed border-gray-200 
            bg-gray-50 flex flex-col items-center justify-center gap-2">
            {preview ? <img src={preview} alt="preview" className='w-full h-full object-cover rounded-xl'/> : <p className="text-xs text-gray-400">Image preview will appear here</p>}
            </figure>

            
            <div className="flex flex-col gap-1.5">
            <label htmlFor="price" className="text-xs font-semibold text-[#2c1a0e] tracking-wide uppercase">
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
                {datas.loading ? "Adding" : "Add Product"}
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

export default SubmitForm