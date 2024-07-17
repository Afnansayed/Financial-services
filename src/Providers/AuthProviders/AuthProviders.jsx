import { createContext, useState } from "react";
import { json } from "react-router-dom";

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
       const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
       const [loading,setLoading] = useState(true);
    const authInfo = {user,setUser,loading,setLoading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;