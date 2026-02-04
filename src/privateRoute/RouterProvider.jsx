import { useContext } from 'react';
import AuthContext from '../components/shareComponents/authContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingPage from '../components/shareComponents/LoadingPage/LoadingPage';

const RouterProvider = ({children}) => {
const{user,loading} = useContext(AuthContext);

const location = useLocation();
// console.log(location);

if(loading){
    return <LoadingPage />
}

if(!user){
   
    return <Navigate state={location.pathname}  to="/login" replace/>
}

return children;
};

export default RouterProvider;