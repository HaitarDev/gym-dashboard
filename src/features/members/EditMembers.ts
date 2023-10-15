import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditProp, editMember } from "../../services/apiMembership";
import toast from "react-hot-toast";

export function EditMembers() {
  const queryClient = useQueryClient();

  const { mutate: editMembers, isLoading } = useMutation({
    mutationKey: ["members"],
    mutationFn: ({ id, value }: EditProp) => editMember({ id, value }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
    },
    onSuccess: () => toast.success("Member edited successfully"),
  });

  return { editMembers, isLoading };
}
