import { useForm } from "react-hook-form"

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
          console.log(data)
      }
    return (
        <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center bg-gray-50 text-gray-800">
            <h1 className="text-3xl font-semibold">Sign in to your account</h1>
            <a className="text-sm text-gray-600" href="/">Or start your free trial</a>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input {...register("email")} id="email" type="email" placeholder="Email address" className="rounded-md border-gray-400 bg-gray-50 text-gray-800 focus:ring-violet-600 focus:border-violet-600 focus:ring-2 p-2" />
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input {...register("password")} id="password" type="text" placeholder="Password" className="  border-gray-400 bg-gray-50 text-gray-800 focus:ring-violet-600 focus:border-violet-600 focus:ring-2 p-2 rounded-md" />
                </div>
                <button type="submit" className="px-8 py-3 space-x-2 font-semibold rounded bg-violet-600 text-gray-50">Sign in</button>
            </form>
        </div>
    );
};

export default Register;