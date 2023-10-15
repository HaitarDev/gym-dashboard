import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: string;
  onClick?: () => void;
  disable?: boolean;
}

function Button({ children, type = "primary", onClick, disable }: Props) {
  if (type === "primary")
    return (
      <button
        onClick={onClick}
        disabled={disable}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 duration-200 text-slate-50 font-semibold text-sm disabled:cursor-not-allowed disabled:bg-indigo-700"
      >
        {children}
      </button>
    );

  if (type === "reset")
    return (
      <button
        onClick={onClick}
        disabled={disable}
        className="flex items-center gap-2 px-4 py-2 rounded-md border border-slate-400 duration-200 text-slate-500 hover:bg-slate-400 hover:text-slate-50 font-semibold text-sm disabled:cursor-not-allowed disabled:bg-slate-500"
      >
        {children}
      </button>
    );
}
export default Button;
