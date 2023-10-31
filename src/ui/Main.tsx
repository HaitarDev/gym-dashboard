import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function Main({ children }: Props) {
  return <div className="w-full">{children}</div>;
}
export default Main;
