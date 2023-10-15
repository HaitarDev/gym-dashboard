import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMember } from "../../services/apiMembership";
import toast from "react-hot-toast";

export function DeleteMembers() {
  const queryClient = useQueryClient();

  const { mutate: removeMember } = useMutation({
    mutationKey: ["members"],
    mutationFn: (id: number) => deleteMember(id),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
    },
    onSuccess: () => toast.success("Member deleted successfully"),
  });

  return { removeMember };
}
