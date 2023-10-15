import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../../services/apiMembership";

export function FetchMembers() {
  const { data: members, isLoading: isLoadingMembers } = useQuery({
    queryKey: ["members"],
    queryFn: () => getMembers(),
  });

  return { members, isLoadingMembers };
}
