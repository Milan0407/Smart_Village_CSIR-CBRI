import MainLayout
  from "../../layouts/MainLayout";

import usePage
  from "../../hooks/usePage";

import NodalLabPageRenderer
  from "./NodalLabPageRenderer";

const NodalLabPage =
  () => {
    const {
      page,
      loading,
      error,
    } = usePage(
      "nodal-lab"
    );

    if (loading) {
      return (
        <h1>
          Loading...
        </h1>
      );
    }

    if (error) {
      return (
        <h1>
          {error}
        </h1>
      );
    }

    return (
      <>
        <MainLayout>

        <NodalLabPageRenderer
          sections={
            page.sections
          }
        />

        </MainLayout>
      </>
    );
  };

export default
  NodalLabPage;