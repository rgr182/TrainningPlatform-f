import React, {createContext, useContext} from "react";
export const AuthContext=createContext({user:{}});

export const logOut=()=>{
    localStorage.removeItem('user');
    window.location.reload();
}

export function useAuth(){
    return useContext(AuthContext);
}