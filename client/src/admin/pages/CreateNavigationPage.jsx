import { useNavigate }
  from "react-router-dom";

import NavigationForm
  from "../components/navigation/NavigationForm";

import {
  createNavigation,
} from "../services/navigation.service";

const CreateNavigationPage = () => {
  const navigate =
    useNavigate();

  const handleCreate =
    async (data) => {
      await createNavigation(
        data
      );

      navigate(
        "/admin/navigation"
      );
    };

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Create Navigation Item
      </h1>

      <NavigationForm
        initialValues={{
          label: "",
          path: "",
          menuType:
            "INTERNAL",
          order: 1,
          isVisible: true,
          openInNewTab:
            false,
        }}
        onSubmit={
          handleCreate
        }
      />

    </div>
  );
};

export default CreateNavigationPage;