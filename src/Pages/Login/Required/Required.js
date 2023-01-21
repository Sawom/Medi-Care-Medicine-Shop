import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { useLocation } from 'react-router-dom';
import auth from '../../../Firebase/Firebase';

const Required = ({children}) => {
    const[user,loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to='/login'  state={{from:location}} replace ></Navigate>
    }
    return children;
};

export default Required;