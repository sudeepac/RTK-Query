import asyncHandler from "express-async-handler";
import { Deal } from "../models/dealModel.js";
// @desc    Get deals
// @route   GET /api/deals
// @access  Public

export const getDeals = asyncHandler(async (req, res) => {
  const deals = await Deal.find({});
  res.json(deals);
});

// @desc    Create deal
// @route   POST /api/deals/:id
// @access  Public

export const createDeal = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, description, source, status } = req.body;
  const deal = new Deal({
    name,
    description,
    source,
    status,
  });

  const createdDeal = await deal.save();
  res.status(201).json(createdDeal);
});

// @desc    Get deal
// @route   GET /api/deals/:id
// @access  Public

export const getDeal = asyncHandler(async (req, res) => {
  const deal = await Deal.findById(req.params.id);
  if (deal) {
    res.json(deal);
  } else {
    res.status(404);
    throw new Error("Deal not found");
  }
});

// @desc    Update deal
// @route   PUT /api/deals/:id
// @access  Public

export const updateDeal = asyncHandler(async (req, res) => {
  const { name, description, source, status } = req.body;

  const deal = await Deal.findById(req.params.id);

  if (deal) {
    deal.name = name || deal.name;
    deal.description = description || deal.description;
    deal.source = source || deal.source;
    deal.status = status || deal.status;

    const updatedDeal = await deal.save();
    res.json(updatedDeal);
  } else {
    res.status(404);
    throw new Error("Deal not found");
  }
});

// @desc    Delete deal
// @route   DELETE /api/deals/:id
// @access  Public

export const deleteDeal = asyncHandler(async (req, res) => {
  const deal = await Deal.findById(req.params.id);

  if (deal) {
    await deal.remove();
    res.json({ message: "Deal removed successfully." });
  } else {
    res.status(404);
    throw new Error("Deal not found");
  }
});
