import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import ProtectRoutes from "./ui/ProtectRoutes";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Toaster />
          <Routes>
            <Route
              element={
                <ProtectRoutes>
                  <AppLayout />
                </ProtectRoutes>
              }
            >
              <Route index element={<Navigate replace to={"home"} />} />
              <Route path="home" element={<Home />} />
              <Route path="members" element={<Members />} />
              <Route path="user" element={<Users />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
