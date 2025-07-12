import SwapRequest from "../models/swapRequest.js";
import Redemption from "../models/redemption.js";
import Item from "../models/Item.js";

// Swap Request
const requestSwap = async (req, res) => {
  const { itemOffered, itemRequested } = req.body;
  const fromUser = req.user._id;

  try {
    const requestedItem = await Item.findById(itemRequested).populate("user");
    if (!requestedItem) return res.status(404).json({ message: "Requested item not found" });

    const toUser = requestedItem.user._id;

    const newRequest = new SwapRequest({
      itemOffered,
      itemRequested,
      fromUser,
      toUser,
    });

    const savedRequest = await newRequest.save();
    res.status(201).json({ message: "Swap request sent", request: savedRequest });
  } catch (err) {
    console.error("Swap Request Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Redeem
const redeemItem = async (req, res) => {
  const { itemId, pointsUsed } = req.body;
  const user = req.user._id;

  try {
    const item = await Item.findById(itemId);
    if (!item) return res.status(404).json({ message: "Item not found" });

    const redemption = new Redemption({
      item: itemId,
      user,
      pointsUsed,
    });

    await redemption.save();
    res.status(201).json({ message: "Redemption request submitted" });
  } catch (err) {
    console.error("Redemption Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export default {
  requestSwap,
  redeemItem,
};
