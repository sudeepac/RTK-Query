import asyncHandler from "express-async-handler";
import { Contact } from "../models/contactModel.js";
// @desc    Get contacts
// @route   GET /api/contacts
// @access  Public

export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({});
  res.json(contacts);
});

// @desc    Create contact
// @route   POST /api/contacts/:id
// @access  Public

export const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone, description } = req.body;
  const contact = new Contact({
    name,
    email,
    phone,
    description,
  });

  const createdContact = await contact.save();
  res.status(201).json(createdContact);
});

// @desc    Get contact
// @route   GET /api/contacts/:id
// @access  Public

export const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (contact) {
    res.json(contact);
  } else {
    res.status(404);
    throw new Error("Contact not found");
  }
});

// @desc    Update contact
// @route   PUT /api/contacts/:id
// @access  Public

export const updateContact = asyncHandler(async (req, res) => {
  const { name, email, phone, description } = req.body;

  const contact = await Contact.findById(req.params.id);

  if (contact) {
    contact.name = name || contact.name;
    contact.email = email || contact.email;
    contact.phone = phone || contact.phone;
    contact.description = description || contact.description;

    const updatedContact = await contact.save();
    res.json(updatedContact);
  } else {
    res.status(404);
    throw new Error("Contact not found");
  }
});

// @desc    Delete contact
// @route   DELETE /api/contacts/:id
// @access  Public

export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (contact) {
    await contact.remove();
    res.json({ message: "Contact removed successfully." });
  } else {
    res.status(404);
    throw new Error("Contact not found");
  }
});
