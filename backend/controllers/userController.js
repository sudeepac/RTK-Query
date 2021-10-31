import asyncHandler from "express-async-handler";
import { generateToken } from "../utils/generateToken.js";
import { User } from "../models/userModel.js";

// @desc Auth user & get token | @route POST /api/expense/users/login | @access Public
export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  //check if the user exist and if entered password is correct
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@desc Register a new user | @route POST /api/expense/users | @access Private/Admin
export const userCreate = asyncHandler(async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //password will be saved as hashed and not as plain text based on the middleware declared in userModel
  const user = await User.create({
    name,
    email,
    password,
    isAdmin,
  });

  if (user) {
    res.status(201).json({ message: "User added" });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc Get user profile | @route GET /api/expense/users/profile | @access Private
export const userProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@desc Get all users | @route GET /api/expense/users | @access Private/Admin
export const userList = asyncHandler(async (req, res) => {
  //get all users thus find with {}
  const users = await User.find({});
  res.json(users);
});

// @description Get a user by ID
// @route       GET /api/users/:id
// @access      Private/Admin

export const userDetail = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User Not found");
  }
});
