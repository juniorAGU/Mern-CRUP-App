import { authContext } from "../Context/Authcontext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function Protected( {children} ) {
    const { isAuthenticated, loading, users1 } = useContext(authContext);
    
    if (loading) return <div>Loading...</div>

    if(!isAuthenticated){
        return <Navigate to={'/register'} />
    }

    return <> { children } </>
}

export default Protected