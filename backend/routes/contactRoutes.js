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

router.route("/").get(getContacts).post(protect, createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

export default router;
