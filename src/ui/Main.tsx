import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function Main({ children }: Props) {
  return <div>{children}</div>;
}
export default Main;
