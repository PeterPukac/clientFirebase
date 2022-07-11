import { Navigate,Outlet, useLocation } from "react-router-dom";


const ProtectedPages = (props) => {
    const {isLoggedIn} =props
    const location = useLocation()
    console.log(isLoggedIn)
    return isLoggedIn ? <Outlet/> : <Navigate to='/login' replace state={{from:location}}/>
}

export default ProtectedPages;