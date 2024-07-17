import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { loading, user } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>;
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoutes;