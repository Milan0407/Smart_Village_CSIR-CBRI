import { useEffect, useState } from "react";

import { getAllMedia } from "../../services/media.service";

import HeroSection from "./HeroSection";
import InformationSection from "./InformationSection";
import HighlightsSection from "./HighlightsSection";
import GallerySection from "./GallerySection";
import ContactSection from "./ContactSection";

const initialForm = {
  village: "",

  heroTitle: "",
  heroSubtitle: "",
  heroImage: "",

  overview: "",
  history: "",
  geography: "",
  climate: "",
  culture: "",
  strengths: "",
  challenges: "",
  opportunities: "",

  highlights: [],

  galleryImages: [],

  contactPerson: "",
  contactDesignation: "",
  contactNumber: "",
  email: "",
  website: "",

  sortOrder: 0,

  isPublished: true,
};

export default function VillageProfileForm({
  initialData = null,
  villages = [],
  onSubmit,
  loading = false,
}) {
  const [formData, setFormData] = useState(initialForm);

  const [media, setMedia] = useState([]);

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialForm,
        ...initialData,
      });
    }
  }, [initialData]);

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    try {
      const data = await getAllMedia();
      setMedia(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <HeroSection
        formData={formData}
        media={media}
        villages={villages}
        handleChange={handleChange}
      />

      <InformationSection
        formData={formData}
        handleChange={handleChange}
      />

      <HighlightsSection
        formData={formData}
        setFormData={setFormData}
      />

      <GallerySection
        formData={formData}
        media={media}
        setFormData={setFormData}
      />

      <ContactSection
        formData={formData}
        handleChange={handleChange}
      />

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : "Save Village Profile"}
        </button>
      </div>
    </form>
  );
}