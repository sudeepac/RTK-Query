import asyncHandler from "express-async-handler";
import { Lead } from "../models/leadModel.js";
// @desc    Get leads
// @route   GET /api/leads
// @access  Public

export const getLeads = asyncHandler(async (req, res) => {
  const leads = await Lead.find({});
  res.json(leads);
});

// @desc    Create lead
// @route   POST /api/leads/:id
// @access  Public

export const createLead = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, description, source, status } = req.body;
  const lead = new Lead({
    name,
    description,
    source,
    status,
  });

  const createdLead = await lead.save();
  res.status(201).json(createdLead);
});

// @desc    Get lead
// @route   GET /api/leads/:id
// @access  Public

export const getLead = asyncHandler(async (req, res) => {
  const lead = await Lead.findById(req.params.id);
  if (lead) {
    res.json(lead);
  } else {
    res.status(404);
    throw new Error("Lead not found");
  }
});

// @desc    Update lead
// @route   PUT /api/leads/:id
// @access  Public

export const updateLead = asyncHandler(async (req, res) => {
  const { name, description, source, status } = req.body;

  const lead = await Lead.findById(req.params.id);

  if (lead) {
    lead.name = name || lead.name;
    lead.description = description || lead.description;
    lead.source = source || lead.source;
    lead.status = status || lead.status;

    const updatedLead = await lead.save();
    res.json(updatedLead);
  } else {
    res.status(404);
    throw new Error("Lead not found");
  }
});

// @desc    Delete lead
// @route   DELETE /api/leads/:id
// @access  Public

export const deleteLead = asyncHandler(async (req, res) => {
  const lead = await Lead.findById(req.params.id);

  if (lead) {
    await lead.remove();
    res.json({ message: "Lead removed successfully." });
  } else {
    res.status(404);
    throw new Error("Lead not found");
  }
});
