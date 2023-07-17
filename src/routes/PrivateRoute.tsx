import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user } = useAppSelector((state) => state.user);
  

  const pathName = useLocation();

  if (!user) {
    return <Navigate to={"/signin"} state={{ path: pathName }}></Navigate>;
  }
  return children;
}
