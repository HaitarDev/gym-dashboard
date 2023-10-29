import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function LogoutUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logOut, isLoading } = useMutation({
    mutationKey: ["login"],
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("login");
    },
  });

  return { logOut, isLoading };
}
