import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  to: string;
}

function LiSidebar({ children, to }: Props) {
  return (
    <Link
      to={to}
      className="flex justify-start gap-2 items-center px-3 py-3 rounded-md text-md font-semibold text-lg text-slate-300 hover:bg-slate-700 duration-200 cursor-pointer w-[95%]"
    >
      {children}
    </Link>
  );
}
export default LiSidebar;
