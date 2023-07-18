import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "./layouts/MainLayouts/MainLayout";
import { setUser } from "./redux/features/user/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userData: string = localStorage.getItem("user");
    // if (!userData===null) {
      dispatch(setUser(JSON.parse(userData)));
    // }
    
  }, [dispatch]);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
