import usePage
  from "../../hooks/usePage";
import MainLayout from "../../layouts/MainLayout";

import AboutPageRenderer
  from "./AboutPageRenderer";


const AboutPage = () => {
  const {
    page,
    loading,
    error,
  } = usePage("about");

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <MainLayout>

      <AboutPageRenderer
        sections={
          page.sections
        }
      />
      </MainLayout>
    </>
  );
};

export default AboutPage;