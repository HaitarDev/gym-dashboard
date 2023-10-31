import { getDateBeforeToday } from "../../utils/DateConvert";
import { useQuery } from "@tanstack/react-query";
import { getMembersBeforeDate } from "../../services/apiMembership";
import { useSearchParams } from "react-router-dom";

export function useMembersBeforeDate() {
  const [searchParams] = useSearchParams();
  const numDays = Number(searchParams.get("filter_days") || "90");

  const { data, isLoading } = useQuery({
    queryFn: () => getMembersBeforeDate(getDateBeforeToday(numDays)),
    queryKey: ["members", `filterDays-${numDays}`],
  });

  return { data, isLoading };
}
