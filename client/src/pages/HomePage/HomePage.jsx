import usePage
  from "../../hooks/usePage";

import MainLayout
  from "../../layouts/MainLayout";

import HomePageRenderer
  from "./HomePageRenderer";

const HomePage = () => {
  const {
    page,
    loading,
    error,
  } = usePage("home");

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
console.log(page);
  return (
    <>
    <MainLayout>
    <HomePageRenderer
      sections={
        page.sections
      }
    />
    </MainLayout>
    </>
  );
};

export default HomePage;