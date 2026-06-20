import slugify from "slugify";

import Announcement from "./announcement.model.js";

export const createAnnouncement =
  async (data, adminId) => {
    const slug = slugify(
      data.title,
      {
        lower: true,
        strict: true,
      }
    );

    const announcement =
      await Announcement.create({
        ...data,
        slug,
        createdBy: adminId,
      });

    return announcement;
  };

export const getAnnouncements =
  async () => {
    return Announcement.find()
      .sort({
        isFeatured: -1,
        publishDate: -1,
      });
  };

export const getLatestAnnouncements =
  async (limit = 4) => {
    return Announcement.find({
      isActive: true,
    })
      .sort({
        publishDate: -1,
      })
      .limit(limit);
  };

export const getAnnouncementBySlug =
  async (slug) => {
    return Announcement.findOne({
      slug,
      isActive: true,
    });
  };

  export const getAnnouncementById =
  async (id) => {
    return Announcement.findById(id);
  };

  
export const updateAnnouncement =
  async (id, data) => {
    if (data.title) {
      data.slug = slugify(
        data.title,
        {
          lower: true,
          strict: true,
        }
      );
    }

    return Announcement.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
      }
    );
  };

export const deleteAnnouncement =
  async (id) => {
    return Announcement.findByIdAndDelete(
      id
    );
  };