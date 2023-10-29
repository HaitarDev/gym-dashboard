import { useForm, SubmitHandler } from "react-hook-form";

import { LoginUser } from "../features/authentication/LoginUser";
import { DataLogin } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const { register, handleSubmit } = useForm<DataLogin>();

  const { useLogin: login, isLoading } = LoginUser();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<DataLogin> = (data) => {
    if (!data) return;
    login(data, {
      onSuccess: () => navigate("/home"),
      onError: (err) => {
        console.log(err, "error on login");
        toast.error("Wrong email or password");
      },
    });
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://img.freepik.com/free-photo/exercise-weights-iron-dumbbell-with-extra-plates_1423-223.jpg?w=1380&t=st=1698411120~exp=1698411720~hmac=89af8926badef3aff908ddc8df3a0000665943419a883f71783e43f84703eed4"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
              {...register("email", { required: true })}
              autoComplete="off"
              disabled={isLoading}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true, minLength: 6 })}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500  disabled:bg-gray-400 disabled:cursor-not-allowed"
              autoComplete="off"
              disabled={isLoading}
            />
          </div>

          {/* <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label htmlFor="remember" className="text-gray-600 ml-2">
              Remember Me
            </label>
          </div> */}

          {/* <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div> */}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-1 text-white font-semibold rounded-md py-2 px-4 w-full  disabled:bg-blue-700 disabled:cursor-not-allowed"
            onSubmit={handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4 " />
            ) : null}
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
