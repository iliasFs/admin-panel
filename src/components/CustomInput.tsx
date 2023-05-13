import { Navigate } from "react-router-dom";


const CustomInput = () => {
  const onClickLogin = () => {
    return <Navigate to="/admin" />;
  };
  return (
    <div className="bg-gray-700 flex justify-center items-center h-screen">
      <div className="bg-black p-20 m-2 shadow-md rounded-md">
        <h2 className="text-2xl text-white font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block font-semibold mb-2 text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border-gray-300 border rounded-md px-10 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block font-semibold mb-2 text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-gray-300 border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-3 w-full mt-6"
            onClick={onClickLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomInput;
