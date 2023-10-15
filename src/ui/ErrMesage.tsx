import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ErrMesage({ children }: Props) {
  return <p className=" text-red-600 text-xs font-semibold ">{children}</p>;
}
export default ErrMesage;
