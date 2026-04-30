import React from 'react';
import { useEffect,useState } from 'react';
import SubmitForm from '../Componenets/SubmitForm';
import { ProductFetching } from '../Service/ProductFetching';
import DeleteProduct from '../Componenets/DeleteProduct';
import EditProduct from '../Componenets/EditProduct';

function Product() {
    const [isopen, setIsopen] = useState(false);
    const [products,setProducts] = useState([]);
    const [opendel,setOpendel] = useState(false)
    const [opened,setOpened] = useState(false);
    const [setid, setSetid] = useState(null)
    console.log(products)

    useEffect(() => {
        const production = async () => {
            const data = await ProductFetching();
            setProducts(data)        }
        production();

    },[isopen,opendel,opened])
    return (
        <section className='px-7 pt-[110px]'>
            <nav className='w-full px-8 py-5 flex justify-between items-center  shadow-sm'>
                <h1 className='h1 text-xl font-bold text-[#2c1a0e] tracking-tight'>
                    PawCare
                </h1>
                <ul className='flex items-center gap-6'>
                    <li className='text-sm font-medium text-gray-600 hover:text-[#c8845a] cursor-pointer transition-colors duration-200'>
                        Our Products
                    </li>
                    <li>
                        <button onClick={() => setIsopen(true)}
                        className='bg-[#c8845a] hover:bg-[#a0622e] active:scale-95 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200'>
                            + Add
                        </button>
                    </li>
                </ul>
            </nav>

            {
                products.length > 0 ? 
                (
                    products.map(product => 
                        <article key={product._id} className='items w-full h-[120px] px-4 py-3 mb-3 flex items-center justify-between gap-4 
                            bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200'>

                        
                            <article className='flex-shrink-0'>
                                <img 
                                    src={product.image} 
                                    alt="preview" 
                                    className='w-16 h-16 rounded-xl object-cover border-2 border-transparent 
                                    hover:border-[#c8845a] transition-all duration-200 cursor-pointer'
                                />
                            </article>

                        
                            <article className='flex-1 min-w-0'>
                                <h1 className='h1 text-sm font-bold text-[#2c1a0e] truncate'>{product.name}</h1>
                                <p className='text-xs text-gray-400 mt-1 truncate'>{product.description}</p>
                                <span className='text-sm font-bold text-[#c8845a] mt-1 block'>
                                    ${product.price.toLocaleString()}
                                </span>
                            </article>

                            
                            <article className='flex flex-col gap-2'>
                                <button onClick={() => {
                                    setOpendel(true)
                                    setSetid(product._id)
                                }}
                                className='px-4 py-1.5 text-xs font-semibold rounded-lg 
                                    bg-red-50 text-red-500 hover:bg-red-500 hover:text-white 
                                    transition-all duration-200'>
                                    Delete
                                </button>
                                <button onClick={() => {
                                    setSetid(product._id)
                                    setOpened(true)}}
                                className='px-4 py-1.5 text-xs font-semibold rounded-lg 
                                    bg-[#f5ede0] text-[#c8845a] hover:bg-[#c8845a] hover:text-white 
                                    transition-all duration-200'>
                                    Edit
                                </button>
                            </article>
                            
                        </article>
                        
                    )
                ) : (
                    <article className='   w-full h-[120px] px-4 py-3 mb-3 flex items-center justify-center'>
                        <h1 className='h1 font-bold'>
                            No Items has being added, <button  className='bg-[#c8845a] hover:bg-[#a0622e] active:scale-95 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200'
                            onClick={() => setIsopen(true)}>add items</button>
                        </h1>
                    </article>
                )
            }


            {
                isopen && <article 
                className='overlay fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center  bg-black/50 min-h-screen py-5'>
                    <SubmitForm onclose={() => setIsopen(false)}/>
                </article>
            }
            {
                opened && <article className='overlay fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center  bg-black/50 min-h-screen py-5'>
                    <EditProduct id={setid}   onclose={() => {
                        setSetid(null)
                        setOpened(false)}}/>

                </article>
            }
            {
                opendel && <article className='overlay fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center  bg-black/50 min-h-screen py-5'>
                    <DeleteProduct id={setid} onclose={() => {
                        setSetid(null)
                        setOpendel(false)}}/>
                </article>
            }
        </section>
    )
}

export default Product