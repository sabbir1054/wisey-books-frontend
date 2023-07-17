import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "./layouts/MainLayouts/MainLayout";
import { setUser } from "./redux/features/user/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(localStorage.getItem("user")));
  }, [dispatch]);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
