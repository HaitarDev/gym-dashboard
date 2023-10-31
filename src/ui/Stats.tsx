import { ReactNode } from "react";

type Props = {
  title: string;
  value: string | number | undefined;
  color: string;
  bgColor: string;
  icon: ReactNode;
};

function Stats({ title, value, icon, color, bgColor }: Props) {
  return (
    <div className="shadow rounded-sm flex items-center gap-6 bg-slate-50 min-h-[6.5rem] min-w-[18rem] px-4">
      <div
        className={`rounded-full p-2 flex items-center text-center  h-[70%] ${bgColor}`}
      >
        <div className={`w-[60px] flex justify-center text-3xl ${color}`}>
          {icon}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2">
        <h3 className="text-slate-500 font-semibold text-base">{title}</h3>
        <p className="font-bold text-xl text-slate-700">{value}</p>
      </div>
    </div>
  );
}
export default Stats;
