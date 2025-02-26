import logo from "../assets/logo.png";
import preview from "../assets/preview.png";
import { Link, Outlet } from "react-router-dom";

const Login = () => {
  return (
    <main className="bg-[#F8FBF8] min-h-screen p-[1px]">
      {/* Main container for the login pagh-sreene */}
      <div className="flex mt-[100px] flex-wrap px-[100px] justify-between">
        {/* Left preview section with an image */}
        <div className="w-[692px]">
          <img className="w-full" src={preview} alt="Preview" />
        </div>

        {/* Right form-container for login and invitation request */}
        <Outlet logo={logo} />
      </div>
    </main>
  );
};

export default Login;
