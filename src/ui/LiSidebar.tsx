import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function LiSidebar({ children }: Props) {
  return (
    <li className="flex justify-start gap-2 items-center px-3 py-3 rounded-md text-md font-semibold text-lg text-slate-600 hover:bg-slate-200 duration-300 cursor-pointer">
      {children}
    </li>
  );
}
export default LiSidebar;
