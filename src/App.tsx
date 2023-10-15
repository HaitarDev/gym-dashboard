import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Toaster />
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to={"home"} />} />
              <Route path="home" element={<Home />} />
              <Route path="members" element={<Members />} />
              <Route path="user" element={<Users />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
