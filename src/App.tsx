import MainLayout from "./layouts/MainLayouts/MainLayout";

function App() {
  const data = "July 12, 1985";
  const publicationYear = new Date(data).getFullYear();
  console.log(publicationYear);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
