import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Plus } from "lucide-react";

import VillageLocationStats from "../components/villageLocation/VillageLocationStats";
import VillageLocationFilters from "../components/villageLocation/VillageLocationFilters";
import VillageLocationTable from "../components/villageLocation/VillageLocationTable";

import { getAllVillages  } from "../services/village.service";
import {
  deleteVillageLocation,
  getAllVillageLocations,
  togglePublishVillageLocation,
} from "../services/villageLocation.service";

const VillageLocationsPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [village, setVillage] = useState("ALL");

  const {
    data: locationsResponse,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["admin-village-locations"],
    queryFn: getAllVillageLocations,
  });

  const { data: villages = [] } = useQuery({
    queryKey: ["villages"],
    queryFn: getAllVillages,
  });

  const locations =
    locationsResponse?.locations ||
    locationsResponse ||
    [];

  const filteredLocations = useMemo(() => {
    return locations.filter((item) => {
      const villageName =
        item.village?.name?.en ||
        item.village?.name ||
        "";

      const matchesSearch =
        villageName
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesVillage =
        village === "ALL" ||
        item.village?._id === village;

      return (
        matchesSearch &&
        matchesVillage
      );
    });
  }, [locations, search, village]);

  const deleteMutation = useMutation({
    mutationFn: deleteVillageLocation,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          "admin-village-locations",
        ],
      });
    },
  });

  const publishMutation = useMutation({
    mutationFn:
      togglePublishVillageLocation,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          "admin-village-locations",
        ],
      });
    },
  });

  const handleDelete = (id) => {
    if (
      !window.confirm(
        "Delete this village location?"
      )
    ) {
      return;
    }

    deleteMutation.mutate(id);
  };

  const handleTogglePublish = (id) => {
    publishMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-96 items-center justify-center text-red-600">
        Failed to load village locations.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Village Locations
          </h1>

          <p className="mt-2 text-slate-500">
            Manage village map
            settings and nearby
            facilities.
          </p>
        </div>

        <button
          onClick={() =>
            navigate(
              "/admin/village-locations/create"
            )
          }
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Village Location
        </button>
      </div>

      <VillageLocationStats
        locations={filteredLocations}
      />

      <VillageLocationFilters
        search={search}
        setSearch={setSearch}
        village={village}
        setVillage={setVillage}
        villages={villages}
      />

      <VillageLocationTable
        locations={filteredLocations}
        onEdit={(id) =>
          navigate(
            `/admin/village-locations/${id}/edit`
          )
        }
        onDelete={handleDelete}
        onTogglePublish={
          handleTogglePublish
        }
      />
    </div>
  );
};

export default VillageLocationsPage;