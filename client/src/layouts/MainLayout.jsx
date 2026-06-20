import Navbar
  from "../components/common/Navbar/Navbar";

import Footer
  from "../components/common/Footer";

  import Header from "../components/common/Header/Header";

const MainLayout = ({
  children,
}) => {
  return (
    <>
     <Header />

      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;