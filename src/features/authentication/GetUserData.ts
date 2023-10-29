import { useQuery } from "@tanstack/react-query";
import { checkIfAuthenticated } from "../../services/apiAuth";

export function GetUserData() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["login"],
    queryFn: checkIfAuthenticated,
  });

  return { user, isAuthenticated: user?.role === "authenticated", isLoading };
}
