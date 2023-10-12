import { AiOutlineHome } from "react-icons/ai";
import LiSidebar from "./LiSidebar";
import { SlPeople } from "react-icons/sl";
import { BiUserPlus } from "react-icons/bi";
import Icon from "./Icon";

function SidebarList() {
  return (
    <ul className="flex flex-col justify-start gap-4">
      <LiSidebar to="home">
        <Icon type="sidebar">
          <AiOutlineHome />
        </Icon>
        Home{" "}
      </LiSidebar>
      <LiSidebar to="members">
        <Icon type="sidebar">
          <SlPeople />
        </Icon>
        Members{" "}
      </LiSidebar>
      <LiSidebar to="user">
        <Icon type="sidebar">
          <BiUserPlus />
        </Icon>
        user{" "}
      </LiSidebar>
    </ul>
  );
}
export default SidebarList;
