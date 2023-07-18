import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const pathName = useLocation();
  const { user, isLoading } = useAppSelector((state) => state.user);
  if (isLoading) {
    return <p>Loading</p>;
  }
  if (!user && !isLoading) {
    return <Navigate to={"/signin"} state={{ path: pathName }}></Navigate>;
  }
  return children;
}
