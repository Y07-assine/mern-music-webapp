import React from 'react';
import { Route,Redirect } from 'react-router';
import { useAuth } from './contexts/UserContext';

export const ProtectedRoute = ({component:Component,...rest})=>{
    const {isAuthenticated} = useAuth();
    return(
        <Route 
            {...rest}
            render={props=>{
                if(isAuthenticated()){
                    return <Component {...props} />
                }else{
                    return(
                    <Redirect to={{
                        pathname:'/admin/auth',
                        state:{
                            from:props.location
                        }
                    }}
                    />
                    );
                }
            }}
        />
    );
};