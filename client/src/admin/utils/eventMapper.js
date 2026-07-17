export const mapEventFormToPayload = (formData) => {
  return {
    title: formData.title.trim(),

    village: formData.village,

    type: formData.type,

    eventDate: formData.eventDate,

    status: formData.status,

    category: formData.category?.trim() || "",

    summary:
      formData.shortDescription?.trim() || "",

    description:
      formData.description?.trim() || "",

    organizer:
      formData.organizer?.trim() || "",

    location:
      formData.location?.trim() || "",

    isFeatured: formData.isFeatured,

    showOnVillageInfo: formData.showOnVillageInfo,

    highlightOrder: Number(formData.highlightOrder || 0),

    published: formData.published,

    coverImage: formData.featuredImage,

    gallery: formData.gallery || [],

    seo: {
      title:
        formData.seoTitle?.trim() || "",

      description:
        formData.seoDescription?.trim() || "",

      keywords:
        formData.seoKeywords?.trim() || "",
    },
  };
};

export const mapEventToForm = (event) => {
  return {
    title: event.title || "",

    village: event.village?._id || event.village || "",

    type: event.type || "",

    eventDate: event.eventDate
      ? event.eventDate.split("T")[0]
      : "",

    status: event.status || "UPCOMING",

    category: event.category || "",

    shortDescription: event.summary || "",

    description: event.description || "",

    organizer: event.organizer || "",

    location: event.location || "",

    isFeatured: event.isFeatured ?? false,

    showOnVillageInfo:
      event.showOnVillageInfo ?? false,

    highlightOrder:
      event.highlightOrder ?? 0,

    published: event.published ?? true,

    seoTitle: event.seo?.title || "",

    seoDescription: event.seo?.description || "",

    seoKeywords: event.seo?.keywords || "",

    featuredImage: event.coverImage || null,

    gallery: event.gallery || [],
  };
};
