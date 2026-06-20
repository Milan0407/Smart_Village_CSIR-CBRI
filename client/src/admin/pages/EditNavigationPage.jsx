import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import NavigationForm
  from "../components/navigation/NavigationForm";

import {
  getNavigationById,
  updateNavigation,
} from "../services/navigation.service";

const EditNavigationPage = () => {
  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [loading,
    setLoading] =
    useState(true);

  const [navigation,
    setNavigation] =
    useState(null);

  useEffect(() => {
    const loadNavigation =
      async () => {
        try {
          const data =
            await getNavigationById(
              id
            );

          setNavigation(
            data
          );
        } finally {
          setLoading(
            false
          );
        }
      };

    loadNavigation();
  }, [id]);

  const handleUpdate =
    async (data) => {
      await updateNavigation(
        id,
        data
      );

      navigate(
        "/admin/navigation"
      );
    };

  if (loading) {
    return (
      <h1>
        Loading...
      </h1>
    );
  }

  if (!navigation) {
    return (
      <h1>
        Navigation item not found
      </h1>
    );
  }

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Edit Navigation Item
      </h1>

      <NavigationForm
        initialValues={{
          label:
            navigation.label ||
            "",

          path:
            navigation.path ||
            "",

          menuType:
            navigation.menuType ||
            "INTERNAL",

          order:
            navigation.order ||
            1,

          isVisible:
            navigation.isVisible,

          openInNewTab:
            navigation.openInNewTab,
        }}
        onSubmit={
          handleUpdate
        }
      />

    </div>
  );
};

export default EditNavigationPage;