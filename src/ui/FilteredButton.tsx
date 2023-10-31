import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
}

function FilteredButton({ children, onClick, active }: Props) {
  if (active)
    return (
      <button
        onClick={onClick}
        className=" p-2 bg-green-500 text-slate-50 rounded-lg transition-colors duration-200"
      >
        {children}
      </button>
    );

  return (
    <button
      onClick={onClick}
      className=" p-2 hover:bg-green-500 hover:text-slate-50 rounded-lg  transition-colors duration-200"
    >
      {children}
    </button>
  );
}
export default FilteredButton;
