import { useEffect, useState } from "react";
import { getSiteSettings } from "../services/siteSettings.service";

const defaultSettings = {
  siteName: "",
  organizationName: "",
  footerDescription: "",
  contactEmail: "",
  contactPhone: "",
  address: "",
  website: "",
  copyrightText: "",
  socialLinks: {
    facebook: "",
    twitter: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  },
};

export default function useSiteSettings() {
  const [settings, setSettings] = useState(defaultSettings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSiteSettings();
        if (data) {
          setSettings(data);
        }
      } catch (error) {
        console.error("Failed to load site settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return {
    settings,
    loading,
  };
}