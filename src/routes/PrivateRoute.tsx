import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const data = localStorage.getItem('user');
  const user = JSON.stringify(data);
  const pathName = useLocation();

  if (!user) {
    return <Navigate to={"/login"} state={{ path: pathName }}></Navigate>;
  }
  return children;
}
