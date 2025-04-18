// models/campaignModel.js
const db = require('../config/db');

exports.createCampaign = (data, callback) => {
  const query = `INSERT INTO campaign (title, user_id, category, description, amount_req, deadline)
                 VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(query, data, callback);
};

exports.getAllCampaigns = (callback) => {
  const query = 'SELECT * FROM campaign';
  db.query(query, callback);
};
