import MainLayout
  from "../../layouts/MainLayout";

import usePage
  from "../../hooks/usePage";

import ParticipatingLabsPageRenderer
  from "./ParticipatingLabsPageRenderer";

const ParticipatingLabsPage =
  () => {
    const {
      page,
      loading,
      error,
    } = usePage(
      "participating-labs"
    );

    if (loading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      return <h1>{error}</h1>;
    }

    return (
      <>
        <MainLayout>

        <ParticipatingLabsPageRenderer
          sections={
            page.sections
          }
        />

       </MainLayout>
      </>
    );
  };

export default
  ParticipatingLabsPage;