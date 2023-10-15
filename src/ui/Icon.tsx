import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: string;
  as?: string;
  onClick?: () => void;
}

function Icon({ children, type = "header", as, onClick }: Props) {
  if (type === "header")
    return (
      <div
        onClick={onClick}
        className="text-xl px-2 py-2 rounded-md border border-slate-300 cursor-pointer hover:bg-slate-600 hover:text-slate-200 duration-300"
      >
        {children}
      </div>
    );

  if (type === "sidebar")
    return (
      <div onClick={onClick} className="text-2xl font-bold">
        {children}
      </div>
    );

  if (type === "column" && as === "delete")
    return (
      <div
        onClick={onClick}
        className="cursor-pointer text-center text-2xl font-bold text-red-500"
      >
        {children}
      </div>
    );
  if (type === "column" && as === "edit")
    return (
      <div
        onClick={onClick}
        className="cursor-pointer text-center text-2xl font-bold text-blue-500"
      >
        {children}
      </div>
    );
}
export default Icon;
