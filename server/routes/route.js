const express = require('express')
const router = express.Router()

// controler
const {createCategories, getAllCategories, getAllTransactions, createTransaction, deleteOneTransaction, getAllLabels} = require('../controllers/controller')

router.route('/api/categories')
    .get(getAllCategories)
    .post(createCategories)

router.route('/api/transaction')
    .get(getAllTransactions)
    .post(createTransaction)

router.route('/api/transaction/:id')
    .delete(deleteOneTransaction)

router.route('/api/labels')
    .get(getAllLabels)


module.exports = router