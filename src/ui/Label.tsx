import { ReactNode } from "react";

interface Props {
  htmlFor: string;
  children: ReactNode;
}

function Label({ htmlFor, children }: Props) {
  return (
    <label className="text-base text-slate-700 font-semibold" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
export default Label;
