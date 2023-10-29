import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuth";
import { SignUpFieldValues } from "../../ui/SignUpForm";

export function SignUpUser() {
  const { mutate: signUpApi, isLoading } = useMutation({
    mutationKey: ["login"],
    mutationFn: (value: SignUpFieldValues) => signUp(value),
  });

  return { signUpApi, isLoading };
}
