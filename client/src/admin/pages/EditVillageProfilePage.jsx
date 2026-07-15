import { useEffect, useState } from "react";
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

  const [profile, setProfile] = useState(null);
  const [villages, setVillages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [villageList, profileData] = await Promise.all([
        getAllVillages(),
        getVillageProfile(id)
      ]);

      setVillages(villageList);
      setProfile(profileData);
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
          "Failed to load profile."
      );
    } finally {
      setLoading(false);
    }
  };

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