import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function H1Pages({ children }: Props) {
  return (
    <h1 className="font-serif font-semibold text-3xl text-slate-600 ">
      {children}
    </h1>
  );
}
export default H1Pages;
