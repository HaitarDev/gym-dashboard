import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function Row({ children, className }: Props) {
  return (
    <div
      className={
        "grid grid-cols-7 text-sm text-slate-700 cursor-default" +
        " " +
        className
      }
    >
      {children}
    </div>
  );
}
export default Row;
