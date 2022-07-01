const mongoose = require('mongoose')

const categoriesModel = new mongoose.Schema({
    type: {type: String, default: 'Investment'},
    color: {type: String, default: '#FCBE44'}
})

const transactionModel = new mongoose.Schema({
    name: {type: String, default: 'Anonymous'},
    type: {type: String, default: 'Investment'},
    amount: {type: Number},
    date: {type: Date, default: Date.now}
})

const Categories =  mongoose.model('categories', categoriesModel)
const Transaction =  mongoose.model('transaction', transactionModel)


module.exports = {
    Transaction,
    Categories
}