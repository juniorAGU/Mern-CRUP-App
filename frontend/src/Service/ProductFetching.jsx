import React from 'react'
import { useEffect } from 'react'

export const ProductFetching = async () => {
    
            const response = await fetch(import.meta.env.VITE_PRO_API,{
                credentials: 'include'
            });
            const result = await response.json();

            if(!response.ok){
                throw new Error( result.message)
            }

            return result
        
    
}

