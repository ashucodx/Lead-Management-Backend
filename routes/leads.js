const express = require('express');
const {
  getLeads,
  getLead,
  createLead,
  updateLead,
  deleteLead
} = require('../controllers/leadController');
const { validateLead } = require('../middleware/validation');

const router = express.Router();

router.route('/')
  .get(getLeads)
  .post(validateLead, createLead);

router.route('/:id')
  .get(getLead)
  .put(validateLead, updateLead)
  .delete(deleteLead);

module.exports = router;