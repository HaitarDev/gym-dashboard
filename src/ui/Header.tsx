import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Icon from "./Icon";

function Header() {
  return (
    <div className="col-start-2 col-span-full  bg-slate-50 px-8 py-4 border-b border-slate-200  flex justify-between items-center ">
      <h4 className="font-medium  text-slate-700 text-xl">
        User :{" "}
        <span className=" text-sky-600 hover:border-b hover:border-slate-500 duration-200">
          {" "}
          Abdelmoghith{" "}
        </span>
      </h4>
      <div className="flex gap-4 ">
        <Icon type="header">
          <IoMdNotificationsOutline />
        </Icon>
        <Icon type="header">
          <CgProfile />
        </Icon>
      </div>
    </div>
  );
}
export default Header;
