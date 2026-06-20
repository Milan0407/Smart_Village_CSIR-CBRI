import MainLayout
  from "../../layouts/MainLayout";

import usePage
  from "../../hooks/usePage";

import CSIRLaboratoriesPageRenderer
  from "./CSIRLaboratoriesPageRenderer";

const CSIRLaboratoriesPage =
  () => {
    const {
      page,
      loading,
      error,
    } = usePage(
      "csir-laboratories"
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

        <CSIRLaboratoriesPageRenderer
          sections={
            page.sections
          }
        />

        </MainLayout>
      </>
    );
  };

export default
  CSIRLaboratoriesPage;