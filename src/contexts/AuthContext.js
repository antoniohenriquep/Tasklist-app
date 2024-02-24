import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const AuthContext = createContext()

export function AuthProvider({children})
{
    const [user,setUser] = useState(null)
    const [loadingAuth,setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    const isAuthenticated = !!user

    useEffect(()=>{
        async function getUser()
        {
            const userInfo = await AsyncStorage.getItem('@userAuth')
            let hasUser = JSON.parse(userInfo || '{}')

            if(Object.keys(hasUser).length >0)
            {
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`

                setUser({
                    id: hasUser.id,
                    name: hasUser.name,
                    email: hasUser.email,
                    token: hasUser.token
                })
            }
            setLoading(false)
        }
        
        getUser()
        // logout()
    },[])

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
    
    async function logout()
    {
        await AsyncStorage.clear().then(()=>{
            setUser(null)
        })
    }

    return(
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            login,
            register,
            loading,
            loadingAuth,
            api}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)