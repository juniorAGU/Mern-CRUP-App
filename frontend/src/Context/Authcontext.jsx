import React from 'react'
import { useState, useEffect,createContext } from 'react';

export const authContext = createContext()
function Authcontextprovider({children}) {
    const [users1, setUsers1] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const FetchUser = async () => {
            try{
                const storage = localStorage.getItem("user");
                if(!storage){

                    setLoading(false)
                    return;
                }
                const user = JSON.parse(storage)
                const response =  await fetch(`${import.meta.env.VITE_USER_API}/${user.id}`,{
                    credentials: "include"
                });
                console.log("status:", response.status)
                const result = await response.json();

                if(!response.ok){
                    throw new Error(result.message)
                }
                setUsers1(result)
            }catch(err){
                console.log(err.message)
                setUsers1(null)
            }finally{
                setLoading(false)
            }
        }

        FetchUser()
    },[])

    const Register = async ( { name,email,password,confirmpassword } ) => {
        const data ={
            name: name,
            email: email,
            password: password,
        }
        const response = await fetch(import.meta.env.VITE_REG_API,{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data),
            credentials: 'include'
        })

        const reult = await response.json();

        if(!response.ok){
            alert(reult.errors || "An Error occured trace it")
        }
        
        localStorage.setItem("user", JSON.stringify(reult.user))
        setUsers1(reult.user)
        return true
    }

    const login = async (email,password) => {
        try{
            const logs = {
                email: email,
                password: password
            }

            const response = await fetch(import.meta.env.VITE_LOG_API,{
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(logs),
                credentials: 'include'
            })
            const result = await response.json();
            

            if(!response.ok){
                throw new Error("login can not be completed")
            }
            localStorage.setItem("user",JSON.stringify(result.user));
            setUsers1(result.user)
            return true

        }catch(err){
            console.log(err.message)
        }
    }

    const logout = () => {
        localStorage.removeItem("user")
        setUsers1(null)
    }
    const ProductData = async ( { name,Description,image,price } ) => {
        try{
            const formData = new FormData();
            formData.append("name",name);
            formData.append("Description", Description);
            formData.append("image", image);
            formData.append("price", price)

            const response = await fetch(import.meta.env.VITE_PRO_API,{
            method: "POST",
            body: formData,
            credentials: 'include'
        })

            const result = await response.json();

            if(!response.ok){
                throw new Error("Error somethin happend")
            }
            return true
            }catch(err){
                console.log(err.message)
        }
        
    }

    const Edit = async ( { newdata},id  ) => {
        const disData = {
            name: newdata.name,
            Description: newdata.Description,
            price: newdata.price
        }
        try{
            const response = await fetch(`${import.meta.env.VITE_PRO_API}/${id}`,{
                method: 'PATCH',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(disData),
                credentials: 'include'
            })
            const result = await response.json();
            if(!response.ok){
                throw new Error("was not able to fetch data")
            }
            return true

        }catch(err){
            console.log(err.message)
            throw new Error(err.message)
        }
    }
    const Delete = async ( $id ) => {
        try{
            const response = await fetch(`${import.meta.env.VITE_PRO_API}/${$id}`,{
                method: "DELETE",
                credentials: "include"
            })
            const result = response.json();

            if(!response.ok){
                throw new Error (" Unable to delete try again")
            }
        }catch(err){
            throw new Error("Unable to Delete ", err.message)
        }
        
    } 

    const values = {
        Register,
        users1,
        isAuthenticated: !!users1,
        login,
        loading,
        logout,
        ProductData,
        Edit,
        Delete
    }

    return <authContext.Provider value={values}>
        {children}
    </authContext.Provider>
}

export default Authcontextprovider