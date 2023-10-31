import { Data } from "../services/apiMembership";

type Props = {
  member: Data;
  status: "joined" | "leaving";
};

function TodayChecking({ member, status }: Props) {
  return (
    <div className="px-4 py-2 rounded  items-center bg-white grid grid-cols-3 text-center ">
      <h3 className="font-medium">{member.name}</h3>
      {status === "joined" ? (
        <>
          <p className="text-slate-700">Today Joined</p>
          <div className="m-auto">
            <p className="text-green-700 bg-green-200 rounded-full px-4 w-[130px] ">
              active
            </p>
          </div>
        </>
      ) : status === "leaving" ? (
        <>
          <p className="text-slate-700">Today Leaving</p>
          <div className="m-auto">
            <p className="text-red-700 bg-red-200 rounded-full px-4 w-[130px]  ">
              not active
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}
export default TodayChecking;
