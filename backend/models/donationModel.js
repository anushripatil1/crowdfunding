// models/donationModel.js
const db = require('../config/db');

exports.createDonation = (data, callback) => {
  const query = `INSERT INTO donation (user_id, campaign_id, contribution, payment_mode)
                 VALUES (?, ?, ?, ?)`;
  db.query(query, data, callback);
};
