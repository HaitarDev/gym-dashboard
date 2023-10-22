import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function Column({ children, className = "" }: Props) {
  return <div className={"p-2 border " + className}>{children}</div>;
}
export default Column;
