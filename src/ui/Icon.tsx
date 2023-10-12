import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type: string;
}

function Icon({ children, type }: Props) {
  if (type === "header")
    return (
      <div className="text-xl px-2 py-2 rounded-md border border-slate-300 cursor-pointer hover:bg-slate-600 hover:text-slate-200 duration-300">
        {children}
      </div>
    );

  if (type === "sidebar")
    return <div className="text-2xl font-bold">{children}</div>;
}
export default Icon;
