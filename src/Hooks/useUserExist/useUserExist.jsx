import { useState } from 'react';
import useAxiosPublic from '../useAxiosPublic/useAxiosPublic'


const useUserExist = () => {
    const [user, setUser] = useState([])
    const axiosPublic = useAxiosPublic();
    const info = localStorage.getItem('user_information')
    const emails = {email:info}
    axiosPublic.post('/userExistence',emails)
    .then(res => {
        if(res.data){
            setUser(res.data);
        }
    })
    .catch(error => console.log(error));
    return user;
};

export default useUserExist;