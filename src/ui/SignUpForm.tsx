import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpUser } from "../features/authentication/SignUpUser";
import toast from "react-hot-toast";

export type SignUpFieldValues = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};
function SignUpForm() {
  const { signUpApi, isLoading } = SignUpUser();
  const { register, handleSubmit, reset } = useForm<SignUpFieldValues>();

  const onSubmit: SubmitHandler<SignUpFieldValues> = (data) => {
    signUpApi(data, {
      onSettled: () => reset(),
      onSuccess: () =>
        toast.success(
          "Sign Up Success, make sure to login to the new admin account"
        ),
    });
  };

  return (
    <form className="w-1/2">
      <div className="flex -mx-3">
        <div className="w-1/2 px-3 mb-5">
          <label htmlFor="firstName" className="text-xs font-semibold px-1">
            First name
          </label>
          <div className="flex">
            <input
              type="text"
              id="firstname"
              className="w-full -ml-2 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 disabled:bg-gray-300"
              placeholder="John"
              {...register("firstname", { required: true })}
              disabled={isLoading}
            />
          </div>
        </div>
        <div className="w-1/2 px-3 mb-5">
          <label htmlFor="lastname" className="text-xs font-semibold px-1">
            Last name
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              id="lastname"
              className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 disabled:bg-gray-300"
              placeholder="Smith"
              {...register("lastname", { required: true })}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label htmlFor="email" className="text-xs font-semibold px-1">
            Email
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="email"
              id="email"
              className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 disabled:bg-gray-300"
              placeholder="johnsmith@example.com"
              {...register("email", {
                required: { value: true, message: "this field is required" },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please enter a valud email address",
                },
              })}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-12">
          <label htmlFor="password" className="text-xs font-semibold px-1">
            Password
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="password"
              id="password"
              className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 disabled:bg-gray-300"
              placeholder="************"
              {...register("password", {
                required: { value: true, message: "this field is required" },
                minLength: {
                  value: 8,
                  message: "password must be unique and complex",
                },
              })}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <button
            onClick={handleSubmit(onSubmit)}
            className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 duration-150 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </form>
  );
}
export default SignUpForm;
