// controllers/donationController.js
const Donation = require('../models/donationModel');

exports.donate = (req, res) => {
  const { user_id, campaign_id, contribution, payment_mode } = req.body;
  Donation.createDonation([user_id, campaign_id, contribution, payment_mode], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Donation successful', donationId: result.insertId });
  });
};
