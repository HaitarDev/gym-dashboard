import { useMutation } from "@tanstack/react-query";
import { DataLogin, loginUser as login } from "../../services/apiAuth";

export function LoginUser() {
  const { mutate: useLogin, isLoading } = useMutation({
    mutationKey: ["login"],
    mutationFn: (value: DataLogin) => login(value),
  });

  return { useLogin, isLoading };
}
