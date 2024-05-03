import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <div className="flex" onClick={logout}>
          <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
          <span className="ml-3 text-white cursor-pointer">Logout</span>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
