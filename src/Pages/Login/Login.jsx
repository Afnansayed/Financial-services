import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import { json } from "react-router-dom";

const Login = () => {
    const axiosPublic = useAxiosPublic();
    const {setUser,setLoading} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  
  const onSubmit = (data) => {
    // console.log(data);
    const userInfo = data;
     //for check user is valid or not
     axiosPublic.post('/login',userInfo)
     .then(res => {
        if(res.data){
          const userDetails = JSON.stringify(res?.data);
            const jwtPin = {pinT:userInfo?.pin};
              axiosPublic.post('/jwt', jwtPin)
              .then(res => {
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token);
                     localStorage.setItem('user',userDetails)
                    //  localStorage.setItem('user_information',userDetails)
                    // setLoading(false);
                    // setUser(localStorage.getItem('user_information'));
                     setUser(localStorage.getItem(JSON.parse(localStorage.getItem('user'))));
                    reset();
                }
              })
              .catch(error => console.error(error))
        }
     })
     .catch(error => {
          console.error(error);
     })
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 mx-auto">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="phone" className="block dark:text-gray-600">
            Phone Number
          </label>
          <input
            {...register('phone', { required: "Phone number is required" })}
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter Your Phone Number"
            className="w-full px-4 py-3 rounded-md border-2 border-black dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.phone && (
            <p className="text-red-600 text-xs">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="pin" className="block dark:text-gray-600">
            Pin
          </label>
          <input
            {...register('pin', { required: "Pin is required" })}
            type="password"
            name="pin"
            id="pin"
            placeholder="Enter your Pin"
            className="w-full px-4 py-3 rounded-md border-2 border-black dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.pin && (
            <p className="text-red-600 text-xs">{errors.pin.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600"
        >
          Sign in
        </button>
      </form>

      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Don't have an account?
        <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
