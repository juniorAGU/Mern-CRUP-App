import React from 'react'
import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { authContext } from '../Context/Authcontext';



function DeleteProduct({ onclose, id}) {
    const { Delete} = useContext(authContext);
    const handleDelte = async () => {
        const Del = await Delete(id);
        onclose();

    }
    return (
        <article className='inner bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm mx-auto'>

            
            <figure className='w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-5'>
                <Icon icon="glyphs-poly:trash" width="80" height="80" />
            </figure>

            
            <article className='text-center mb-6'>
                <h1 className='text-lg font-bold text-[#2c1a0e] mb-2'>
                    Delete Product
                </h1>
                <p className='text-sm text-gray-400 leading-relaxed'>
                    Are you sure you want to delete this product? 
                    This action cannot be undone.
                </p>
            </article>

            
            <article className='flex gap-3'>
                <button 
                    onClick={onclose}
                    className='flex-1 py-3 rounded-xl border border-gray-200 
                    text-sm font-semibold text-gray-500 
                    hover:bg-gray-100 transition-all duration-200'>
                    No, Cancel
                </button>
                <button 
                    onClick={handleDelte}
                    className='flex-1 py-3 rounded-xl bg-red-500 
                    hover:bg-red-600 active:scale-95 text-white 
                    text-sm font-semibold transition-all duration-200'>
                    Yes, Delete
                </button>
            </article>

        </article>
    )
}

export default DeleteProduct