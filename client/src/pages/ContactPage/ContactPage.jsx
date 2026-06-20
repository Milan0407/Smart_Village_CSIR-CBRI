import MainLayout
  from "../../layouts/MainLayout";

import usePage from "../../hooks/usePage";

import ContactPageRenderer from "./ContactPageRenderer";

const ContactPage = () => {
  const {
    page,
    loading,
    error,
  } = usePage("contact");

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <MainLayout>

      <ContactPageRenderer
        sections={page.sections}
      />

      </MainLayout>
    </>
  );
};

export default ContactPage;