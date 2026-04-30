import React from 'react';
import { Link, useRouteError } from 'react-router-dom';


function Errorboundary() {
    const err = useRouteError();
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div>
                <h1 className='text-xl font-bold'> You just Ran into an Error </h1>
                <h1 className='py-2 px-3 bg-red-600 text-center rounded text-white'>{err.message}!!</h1>
                <Link to={'/'} className=' underline text-center'> Go BACK</Link>
            </div>
        </div>
    )
}

export default Errorboundary