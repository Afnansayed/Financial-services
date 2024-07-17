import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import Register from '../../Sheare/Register/Register'

const AgentRegister = () => {
    const axiosPublic = useAxiosPublic();
    const onSubmit = (data) => {
        console.log("User registration data:", data);
        // Handle user registration logic
        const userInfo = {
            name: data?.name,
            mobileNumber: data?.mobileNumber,
            email: data?.email,
            pin: data?.pin,
            role: "AgentPending"
        }
        console.log(userInfo);
        axiosPublic.post('/users',userInfo)
        .then(res => {
            if(res.data){
                const jwtPin = {pinT:userInfo?.pin};
                axiosPublic.post('/jwt',jwtPin)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token);
                    }
                })
            }
        })
        .catch(error=> console.error(error))
    };
    return <Register onSubmit={onSubmit} role={"Agent"}></Register>
};

export default AgentRegister;