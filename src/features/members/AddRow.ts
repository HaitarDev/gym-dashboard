import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertMember } from "../../services/apiMembership";

export function AddRow() {
  const queryClient = useQueryClient();

  const { mutate: addRow, isLoading } = useMutation({
    mutationKey: ["members"],
    mutationFn: (data: object) => insertMember(data),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["members"] }),
  });

  return { addRow, isLoading };
}
