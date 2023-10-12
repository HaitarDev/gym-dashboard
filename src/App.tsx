import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to={"home"} />} />
            <Route path="home" element={<Home />} />
            <Route path="members" element={<Members />} />
            <Route path="user" element={<Users />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <AppLayout />
      </BrowserRouter>
    </>
  );
}

export default App;
