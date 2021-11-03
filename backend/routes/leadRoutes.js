import express from "express";
import {
  getLeads,
  getLead,
  createLead,
  updateLead,
  deleteLead,
} from "../controllers/leadController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getLeads).post(createLead);

router.route("/:id").get(getLead).put(updateLead).delete(deleteLead);

export default router;
