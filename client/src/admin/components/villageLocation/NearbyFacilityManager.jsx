import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";

import NearbyFacilityModal from "./NearbyFacilityModal";
import FacilityTable from "./FacilityTable";

import {
  createFacility,
  updateFacility,
  deleteFacility,
} from "../../services/villageLocation.service";

const emptyFacility = {
  name: "",
  category: "OTHER",
  description: "",
  address: "",
  contactNumber: "",
  location: {
    type: "Point",
    coordinates: [0, 0],
  },
  displayOrder: 0,
};

const NearbyFacilityManager = ({
  location,
  onLocationChange,
}) => {
  const queryClient = useQueryClient();

  const [facilityModal, setFacilityModal] =
    useState(null);

  const [saving, setSaving] =
    useState(false);

  /*
  ====================================================
  Update Local + React Query Cache
  ====================================================
  */

  const applyLocationUpdate = (
    updatedLocation
  ) => {
    onLocationChange(updatedLocation);

    queryClient.setQueryData(
      [
        "admin-village-location",
        location._id,
      ],
      updatedLocation
    );

    queryClient.setQueryData(
      ["admin-village-locations"],
      (current) => {
        if (!current) return current;

        return {
          ...current,
          locations: (
            current.locations || []
          ).map((item) =>
            item._id === updatedLocation._id
              ? updatedLocation
              : item
          ),
        };
      }
    );
  };

  /*
  ====================================================
  Save Facility
  ====================================================
  */

  const saveFacility = async (
    values
  ) => {
    try {
      setSaving(true);

      const updated =
        values._id
          ? await updateFacility(
              location._id,
              values._id,
              values
            )
          : await createFacility(
              location._id,
              values
            );

      applyLocationUpdate(updated);

      setFacilityModal(null);
    } catch (error) {
      console.error(error);
      alert(
        "Failed to save nearby facility."
      );
    } finally {
      setSaving(false);
    }
  };

  /*
  ====================================================
  Delete Facility
  ====================================================
  */

  const removeFacility =
    async (facility) => {
      const confirmed =
        window.confirm(
          `Delete "${facility.name}"?`
        );

      if (!confirmed) return;

      try {
        const updated =
          await deleteFacility(
            location._id,
            facility._id
          );

        applyLocationUpdate(updated);
      } catch (error) {
        console.error(error);

        alert(
          "Failed to delete nearby facility."
        );
      }
    };

  const facilities =
    location.nearbyFacilities || [];
      return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Nearby Facilities
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage schools, hospitals, banks, transport,
            government offices and other important places
            near this village.
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            setFacilityModal(emptyFacility)
          }
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          <Plus size={16} />
          Add Facility
        </button>
      </div>

      <div className="mt-6">
        <FacilityTable
          facilities={facilities}
          onEdit={(facility) =>
            setFacilityModal(facility)
          }
          onDelete={removeFacility}
        />
      </div>

      {facilityModal && (
        <NearbyFacilityModal
          initialValue={facilityModal}
          onClose={() =>
            setFacilityModal(null)
          }
          onSubmit={saveFacility}
          saving={saving}
        />
      )}
    </section>
  );
};

export default NearbyFacilityManager;