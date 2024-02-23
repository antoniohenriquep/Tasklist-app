import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const AuthContext = createContext()

export function AuthProvider({children})
{
    const [user,setUser] = useState(null)
    const [loadingAuth,setLoadingAuth] = useState(false)
    
    const isAuthenticated = !!user

    async function login({email, password})
    {
        setLoadingAuth(true)
        try{
            const response = await api.post('/login',{
                email,
                password
            })

            const {id,name, token} = response.data
            const data = {
                ...response.data
            }

            await AsyncStorage.setItem('@userAuth',JSON.stringify(data))

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setUser({
                id,
                name,
                email,
                token
            })

            setLoadingAuth(false)
            console.log(response.data)
        }
        catch(err)
        {
            console.log(err)
        }
    }

    async function register({name,email,password})
    {
        setLoadingAuth(true)

        try {
            const response = await api.post('/register',{
                name,
                email,
                password
            })

            console.log(response.data);
            setLoadingAuth(false)
        } catch (err) {
            console.log(err);
        }
    }
    
    
    return(
        <AuthContext.Provider value={{user,isAuthenticated,login,register}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)