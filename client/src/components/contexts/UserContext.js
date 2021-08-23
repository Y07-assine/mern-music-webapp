import React,{createContext,useState} from 'react';
import axios from 'axios';
import { signInURL,signUpURL } from '../../constant';

const UserContext = createContext({});

const UserContextProvider = (props)=>{
    const [user,setUser] = useState(null);

    const signin = (formData,history) =>async()=>{
        try{
            const data = await axios.post(signInURL,formData);

            localStorage.setItem('profile',JSON.stringify(data));
            setUser(data);
            history.push('/');
        }catch(error){
            console.log(error);
        }
    };

    const signup = (formData,history)=>async()=>{
        try {
            const data = await axios.post(signUpURL,formData);
            console.log(data)
            localStorage.setItem('profile',JSON.stringify(data));
            setUser(data);
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const signout = ()=>{
        localStorage.clear();
        setUser(null);
    }

    const authContextValue = {
        signin,
        signup,
        signout
    }

    return(
        <UserContext.Provider value={authContextValue} {...props} />
    );
};
const useAuth = () => React.useContext(UserContext);
export {UserContextProvider,useAuth}; 