import InputOutline from "components/common/Input/input-outline";
import { useRouter } from "next/router";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const router = useRouter();

  const goToFeed = () => {
    router.push("/feed");
  };

  return (
    <div className="relative h-full bg-white">
      <div className="flex flex-col">
        <div className="flex w-4/5 flex-col p-3">
          <div className="mt-4 h-14 w-14 rounded-full border-8 border-primary" />

          <span className="mt-8 text-4xl font-bold">
            Welcome to Social Network!
          </span>
          <span className="mt-5 text-xl">
            Living in today’s metropolitan world of cellular phones, mobile
            computers.
          </span>
        </div>
        <div className="mt-4 p-3">
          <div>
            <InputOutline placeholder="Email" />
          </div>
          <div className="mt-2">
            <InputOutline
              placeholder="Password"
              iconRight={<AiOutlineEyeInvisible className="text-xl" />}
            />
          </div>
          <div className="mt-7">
            <button
              className="w-full rounded-full bg-primary py-3 text-lg text-white"
              onClick={goToFeed}
            >
              Login
            </button>
          </div>
          <div className="mt-2 flex justify-center">
            <button className="font-semibold text-gray-500">
              Forgot password?
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <button
              className="w-full rounded-full bg-[#3B5999] py-3 text-lg text-white"
              onClick={goToFeed}
            >
              Continue with Facebook
            </button>
            <button
              className="w-full rounded-full bg-[#4286F5] py-3 text-lg text-white"
              onClick={goToFeed}
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 flex w-full items-center justify-center border-t border-gray-300 p-2">
        <span className="text-gray-400">
          {"Don't have an account? Sign up"}
        </span>
      </div>
    </div>
  );
};

export default Login;
