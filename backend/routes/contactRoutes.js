import express from "express";
import {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getContacts).post(protect, createContact);

router
  .route("/:id")
  .get(protect, getContact)
  .put(protect, updateContact)
  .delete(protect, deleteContact);

export default router;
