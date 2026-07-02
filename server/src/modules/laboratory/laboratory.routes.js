import express from "express";

import * as laboratoryController
  from "./laboratory.controller.js";

const router = express.Router();

router.post(
  "/",
  laboratoryController.createLaboratory
);

router.get(
  "/",
  laboratoryController.getAllLaboratories
);


router.get(
  "/nodal",
  laboratoryController.getNodalLaboratory
);

router.get(
  "/slug/:slug",
  laboratoryController.getLaboratoryBySlug
);


router.get(
  "/:id",
  laboratoryController.getLaboratoryById
);

router.put(
  "/:id",
  laboratoryController.updateLaboratory
);

router.delete(
  "/:id",
  laboratoryController.deleteLaboratory
);

export default router;