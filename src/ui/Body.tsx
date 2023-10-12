import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Body({ children }: Props) {
  return (
    <div className="col-start-2 col-span-full row-start-2 row-span-full border-l border-slate-200 px-10 py-10">
      {children}
    </div>
  );
}
export default Body;
