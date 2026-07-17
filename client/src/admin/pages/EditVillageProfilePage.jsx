import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import VillageProfileForm from "../components/villageProfile/VillageProfileForm";

import {
  updateVillageProfile,
  getVillageProfile,
} from "../services/villageProfile.service";

import {
  getAllVillages,
} from "../services/village.service";

export default function EditVillageProfilePage() {
 const { id } = useParams();

  const navigate = useNavigate();

  const [saving, setSaving] = useState(false);

  const {
    data,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["admin-village-profile", id],
    queryFn: async () => {
      const [villageList, profileData] = await Promise.all([
        getAllVillages(),
        getVillageProfile(id),
      ]);

      return {
        villages: villageList,
        profile: profileData,
      };
    },
    enabled: !!id,
  });

  const villages = data?.villages || [];
  const profile = data?.profile || null;

  const handleSubmit = async (formData) => {
    try {
      setSaving(true);

      await updateVillageProfile(
        profile._id,
        formData
      );

      alert("Village Profile Updated Successfully.");

      navigate("/admin/village-profiles");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center">
        Loading...
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="p-8 text-center text-red-600">
        Failed to load profile.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Edit Village Profile
        </h1>

        <p className="text-gray-500">
          Update Village Information.
        </p>
      </div>

      <VillageProfileForm
        initialData={profile}
        villages={villages}
        loading={saving}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
