import asyncHandler from "express-async-handler";
import { Account } from "../models/accountModel.js";
// @desc    Get accounts
// @route   GET /api/accounts
// @access  Public

export const getAccounts = asyncHandler(async (req, res) => {
  const accounts = await Account.find({});
  res.json(accounts);
});

// @desc    Create account
// @route   POST /api/accounts/:id
// @access  Public

export const createAccount = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone, description } = req.body;
  const account = new Account({
    name,
    email,
    phone,
    description,
  });

  const createdAccount = await account.save();
  res.status(201).json(createdAccount);
});

// @desc    Get account
// @route   GET /api/accounts/:id
// @access  Public

export const getAccount = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id);
  if (account) {
    res.json(account);
  } else {
    res.status(404);
    throw new Error("Account not found");
  }
});

// @desc    Update account
// @route   PUT /api/accounts/:id
// @access  Public

export const updateAccount = asyncHandler(async (req, res) => {
  const { name, email, phone, description } = req.body;

  const account = await Account.findById(req.params.id);

  if (account) {
    account.name = name || account.name;
    account.email = email || account.email;
    account.phone = phone || account.phone;
    account.description = description || account.description;

    const updatedAccount = await account.save();
    res.json(updatedAccount);
  } else {
    res.status(404);
    throw new Error("Account not found");
  }
});

// @desc    Delete account
// @route   DELETE /api/accounts/:id
// @access  Public

export const deleteAccount = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id);

  if (account) {
    await account.remove();
    res.json({ message: "Account removed successfully." });
  } else {
    res.status(404);
    throw new Error("Account not found");
  }
});
