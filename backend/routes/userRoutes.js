import express from "express";
const router = express.Router();
import {
  userLogin,
  userCreate,
  userProfile,
  userList,
  userDetail,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

//To create and get userlist (Admin access only)
router
  .route("/")
  .post(protect, admin, userCreate)
  .get(protect, admin, userList);

router.post("/login", userLogin);

//for logged in user's access (public) - get and update own profile
router.route("/profile").get(protect, userProfile);

//To get, update and delete user (Admin access only)
// router.route('/:id').get(protect, admin, userDetail).put(protect, admin, userEdit).delete(protect, admin, userDelete)

router.route("/:id").get(protect, admin, userDetail);

export default router;
