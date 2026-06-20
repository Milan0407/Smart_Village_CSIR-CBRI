import MainLayout
  from "../../layouts/MainLayout";

import usePage
  from "../../hooks/usePage";

import SmartVillagePageRenderer
  from "./SmartVillagePageRenderer";

const SmartVillagePage =
  () => {
    const {
      page,
      loading,
      error,
    } = usePage(
      "csir-smart-village"
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
        <SmartVillagePageRenderer
          sections={
            page.sections
          }
        />
</MainLayout>
      </>
    );
  };

export default
  SmartVillagePage;