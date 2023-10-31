import { isAfter, isToday } from "date-fns";
import { Data } from "../services/apiMembership";
import TodayChecking from "./TodayChecking";

type Props = {
  data: Data[] | undefined;
};

function TodayActivities({ data }: Props) {
  const getIsActive = (value: string) => isAfter(new Date(value), new Date());
  // today === created-at  && status === active  || today === end_date && status === not active;

  const joinedMembers = data?.filter(
    (value) =>
      isToday(new Date(value.created_at)) && getIsActive(value.date_end)
  );

  const leavingMembers = data?.filter(
    (value) =>
      isToday(new Date(value.created_at)) && !getIsActive(value.date_end)
  );

  return (
    <div className="min-w-[500px] bg-slate-50 p-2 shadow">
      <h2 className="font-semibold text-lg text-slate-800 mb-8 mt-4  ">
        Today Activities:
      </h2>
      <div className="flex gap-2 flex-col overflow-y-scroll">
        {joinedMembers?.map((member) => (
          <TodayChecking member={member} status="joined" />
        ))}
        {leavingMembers?.map((member) => (
          <TodayChecking member={member} status="leaving" />
        ))}
      </div>
    </div>
  );
}
export default TodayActivities;
