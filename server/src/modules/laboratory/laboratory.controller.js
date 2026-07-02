import * as laboratoryService
  from "./laboratory.service.js";

export const createLaboratory =
  async (req, res, next) => {
    try {
      const laboratory =
        await laboratoryService.createLaboratory(
          req.body
        );

      res.status(201).json({
        success: true,
        data: laboratory,
      });
    } catch (error) {
      next(error);
    }
  };

export const getAllLaboratories =
  async (req, res, next) => {
    try {
      const laboratories =
        await laboratoryService.getAllLaboratories();

      res.json({
        success: true,
        data: laboratories,
      });
    } catch (error) {
      next(error);
    }
  };

export const getLaboratoryById =
  async (req, res, next) => {
    try {
      const laboratory =
        await laboratoryService.getLaboratoryById(
          req.params.id
        );

      res.json({
        success: true,
        data: laboratory,
      });
    } catch (error) {
      next(error);
    }
  };

export const getLaboratoryBySlug =
  async (req, res, next) => {
    try {
      const laboratory =
        await laboratoryService.getLaboratoryBySlug(
          req.params.slug
        );

      res.json({
        success: true,
        data: laboratory,
      });
    } catch (error) {
      next(error);
    }
  };


  export const getNodalLaboratory =
  async (req, res, next) => {
    try {
      const laboratory =
        await laboratoryService.getNodalLaboratory();

      res.json({
        success: true,
        data: laboratory,
      });
    } catch (error) {
      next(error);
    }
  };

export const updateLaboratory =
  async (req, res, next) => {
    try {
      const laboratory =
        await laboratoryService.updateLaboratory(
          req.params.id,
          req.body
        );

      res.json({
        success: true,
        data: laboratory,
      });
    } catch (error) {
      next(error);
    }
  };

export const deleteLaboratory =
  async (req, res, next) => {
    try {
      await laboratoryService.deleteLaboratory(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "Laboratory deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  };