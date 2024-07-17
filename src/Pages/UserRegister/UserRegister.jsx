import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import Register from "../../Sheare/Register/Register";


const UserRegister = () => {
      const axiosSecure = useAxiosSecure();
      const axiosPublic = useAxiosPublic();
    const onSubmit = (data) => {
        console.log("User registration data:", data);
        // Handle user registration logic
        const userInfo = {
            name: data?.name,
            mobileNumber: data?.mobileNumber,
            email: data?.email,
            pin: data?.pin,
            role: "UserPending"
        }
        console.log(userInfo);
        axiosSecure.post('/users',userInfo)
        .then(res => {
            if(res.data){
                const jwtPin = {pinT:userInfo?.pin};
                console.log(jwtPin)
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

    return <Register onSubmit={onSubmit} role={"User"}></Register>
};

export default UserRegister;