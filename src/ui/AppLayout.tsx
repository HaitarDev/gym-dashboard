import Body from "./Body";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="max-h-screen grid grid-cols-9 grid-rows-14 ">
      <Sidebar />
      <Header />

      <Body>
        <Main />
      </Body>
    </div>
  );
}
export default AppLayout;
