import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../../services/apiMembership";
import { Data } from "./MembersTable";

export function FetchMembers() {
  const { data: members, isLoading: isLoadingMembers } = useQuery<Data[]>({
    queryKey: ["members"],
    queryFn: () => getMembers(),
  });

  return { members, isLoadingMembers };
}
