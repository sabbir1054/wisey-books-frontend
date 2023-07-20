import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import MainLayout from "./layouts/MainLayouts/MainLayout";
import { setUser } from "./redux/features/user/userSlice";
import { IUser } from "./types/user";

function App() {
  const dispatch = useDispatch();
  const userData = localStorage.getItem("user");
  let data: IUser;
  if (userData !== "undefined") {
    data = JSON.parse(userData);
  }

  useEffect(() => {
    dispatch(setUser(data));
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <MainLayout />
    </>
  );
}

export default App;
