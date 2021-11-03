import express from "express";
import {
  getDeals,
  getDeal,
  createDeal,
  updateDeal,
  deleteDeal,
} from "../controllers/dealController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getDeals).post(protect, createDeal);

router
  .route("/:id")
  .get(protect, getDeal)
  .put(protect, updateDeal)
  .delete(protect, deleteDeal);

export default router;
