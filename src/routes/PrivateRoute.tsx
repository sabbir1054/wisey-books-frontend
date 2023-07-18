import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const pathName = useLocation();
  // const { user, isLoading } = useAppSelector((state) => state.user);
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to={"/signin"} state={{ path: pathName }}></Navigate>;
  }
  return children;
}
