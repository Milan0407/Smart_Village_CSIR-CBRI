import * as announcementService from "./announcement.service.js";

export const createAnnouncement =
  async (req, res, next) => {
    try {
      const announcement =
        await announcementService.createAnnouncement(
          req.body,
          req.admin._id
        );

      res.status(201).json({
        success: true,
        message:
          "Announcement created successfully",
        data: announcement,
      });
    } catch (error) {
      next(error);
    }
  };

export const getAnnouncements =
  async (req, res, next) => {
    try {
      const announcements =
        await announcementService.getAnnouncements();

      res.status(200).json({
        success: true,
        data: announcements,
      });
    } catch (error) {
      next(error);
    }
  };

export const getAnnouncementById =
  async (req, res, next) => {
    try {
      const announcement =
        await announcementService.getAnnouncementById(
          req.params.id
        );

      if (!announcement) {
        return res.status(404).json({
          success: false,
          message:
            "Announcement not found",
        });
      }

      res.status(200).json({
        success: true,
        data: announcement,
      });
    } catch (error) {
      next(error);
    }
  };

export const getLatestAnnouncements =
  async (req, res, next) => {
    try {
      const announcements =
        await announcementService.getLatestAnnouncements(
          req.query.limit || 4
        );

      res.status(200).json({
        success: true,
        data: announcements,
      });
    } catch (error) {
      next(error);
    }
  };

export const getAnnouncementBySlug =
  async (req, res, next) => {
    try {
      const announcement =
        await announcementService.getAnnouncementBySlug(
          req.params.slug
        );

      if (!announcement) {
        return res.status(404).json({
          success: false,
          message:
            "Announcement not found",
        });
      }

      res.status(200).json({
        success: true,
        data: announcement,
      });
    } catch (error) {
      next(error);
    }
  };

export const updateAnnouncement =
  async (req, res, next) => {
    try {
      const announcement =
        await announcementService.updateAnnouncement(
          req.params.id,
          req.body
        );

      res.status(200).json({
        success: true,
        message:
          "Announcement updated successfully",
        data: announcement,
      });
    } catch (error) {
      next(error);
    }
  };

export const deleteAnnouncement =
  async (req, res, next) => {
    try {
      await announcementService.deleteAnnouncement(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Announcement deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  };