import Icon from "./Icon";

import { AiOutlineHome } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { BiUserPlus } from "react-icons/bi";
import LiSidebar from "./LiSidebar";

function Sidebar() {
  return (
    <div className="row-span-full bg-slate-50 px-8 py-4  ">
      <div className="mb-20">
        <h1 className="font-bold -tracking-tighter text-xl  ">Gym Admin</h1>
      </div>
      <ul className="flex flex-col gap-4">
        <LiSidebar>
          <Icon type="sidebar">
            <AiOutlineHome />
          </Icon>
          Home{" "}
        </LiSidebar>
        <LiSidebar>
          <Icon type="sidebar">
            <SlPeople />
          </Icon>
          Members{" "}
        </LiSidebar>
        <LiSidebar>
          <Icon type="sidebar">
            <BiUserPlus />
          </Icon>
          user{" "}
        </LiSidebar>
      </ul>
    </div>
  );
}
export default Sidebar;
