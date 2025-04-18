// controllers/campaignController.js
const Campaign = require('../models/campaignModel');

exports.createCampaign = (req, res) => {
  const { title, user_id, category, description, amount_req, deadline } = req.body;
  Campaign.createCampaign([title, user_id, category, description, amount_req, deadline], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Campaign created', campaignId: result.insertId });
  });
};

exports.getCampaigns = (req, res) => {
  Campaign.getAllCampaigns((err, results) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(results);
  });
};
