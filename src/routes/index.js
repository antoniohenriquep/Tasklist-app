import { useAuth } from "../contexts/AuthContext";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes()
{
    const {isAuthenticated} = useAuth()

    return(
        isAuthenticated ? <AppRoutes/>: <AuthRoutes/>
    )
}