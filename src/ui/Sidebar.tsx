import Logo from "./Logo";
import SidebarList from "./SidebarList";

function Sidebar() {
  return (
    <div className="row-span-full bg-background ">
      <Logo />
      <SidebarList />
    </div>
  );
}
export default Sidebar;
