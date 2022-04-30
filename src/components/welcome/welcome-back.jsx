const WelcomeBack = () => {
  return (
    <div className="h-full bg-white">
      <div className="flex h-full flex-col">
        <div className="flex-1 p-3">
          <span className="text-3xl font-bold">Welcome back!</span>
        </div>
        <div className="flex items-center justify-center border-t border-gray-300 p-2">
          <span className="text-gray-400">
            {"Don't have an account? Sign up"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBack;
