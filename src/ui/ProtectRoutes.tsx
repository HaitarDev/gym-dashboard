import { ReactNode, useEffect } from "react";
import { GetUserData } from "../features/authentication/GetUserData";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

function ProtectRoutes({ children }: Props) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = GetUserData();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Spinner />{" "}
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectRoutes;
