import { HiOutlineLogout } from "react-icons/hi";
import Icon from "./Icon";
import { LogoutUser } from "../features/authentication/LogoutUser";
import { GetUserData } from "../features/authentication/GetUserData";

function Header() {
  const { logOut } = LogoutUser();
  const { user } = GetUserData();
  const userName = user?.user_metadata.firstname;

  return (
    <div className="col-start-2 col-span-full  bg-slate-50 px-8 py-4 border-b border-slate-200  flex justify-between items-center ">
      <h4 className="font-medium  text-slate-700 text-xl">
        User :{" "}
        <span className=" text-sky-600 hover:border-b hover:border-slate-500 duration-200">
          {" "}
          {userName}{" "}
        </span>
      </h4>
      <div className="flex gap-4 ">
        <Icon type="header" onClick={() => logOut()}>
          <HiOutlineLogout />
        </Icon>
      </div>
    </div>
  );
}
export default Header;
