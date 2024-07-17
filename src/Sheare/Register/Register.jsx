import { useForm } from "react-hook-form"
import PropTypes from 'prop-types';

const Register = ({ onSubmit , role}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    return (
        <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center bg-gray-50 text-gray-800 mx-auto">
        <h1 className="text-3xl font-semibold">Create your {role} account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-4">
                <label htmlFor="name" className="text-black">Name</label>
                <input
                    {...register("name", { required: "Name is required" })}
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="rounded-md border-black border-2 bg-gray-50 text-gray-800 focus:ring-violet-600 focus:border-violet-600 focus:ring-2 p-2"
                />
                {errors.name && <span className="text-red-600">{errors.name.message}</span>}

                <label htmlFor="mobileNumber" className="text-black">Mobile Number</label>
                <input
                    {...register("mobileNumber", { required: "Mobile Number is required" })}
                    id="mobileNumber"
                    type="text"
                    placeholder="Mobile Number"
                    className="rounded-md  border-2 border-black bg-gray-50 text-gray-800 focus:ring-violet-600 focus:border-violet-600 focus:ring-2 p-2"
                />
                {errors.mobileNumber && <span className="text-red-600">{errors.mobileNumber.message}</span>}

                <label htmlFor="email" className="text-black">Email address</label>
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "Invalid email address",
                        },
                    })}
                    id="email"
                    type="email"
                    placeholder="Email address"
                    className="rounded-md border-black border-2 bg-gray-50 text-gray-800 focus:ring-violet-600 focus:border-violet-600 focus:ring-2 p-2"
                />
                {errors.email && <span className="text-red-600">{errors.email.message}</span>}

                <label htmlFor="pin" className="text-black">PIN</label>
                <input
                    {...register("pin", {
                        required: "PIN is required",
                        pattern: {
                            value: /^\d{5}$/,
                            message: "PIN must be exactly 5 digits",
                        },
                    })}
                    id="pin"
                    type="password"
                    placeholder="5-digit PIN"
                    className="rounded-md border-black border-2 bg-gray-50 text-gray-800 focus:ring-violet-600 focus:border-violet-600 focus:ring-2 p-2"
                />
                {errors.pin && <span className="text-red-600">{errors.pin.message}</span>}
            </div>
            <button type="submit" className="px-8 py-3 space-x-2 font-semibold rounded bg-violet-600 text-gray-50">Register</button>
        </form>
    </div>
    );
};
Register.propTypes ={
      onSubmit:PropTypes.func,
      role:PropTypes.string
}
export default Register;