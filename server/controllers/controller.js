const { model } = require("mongoose");
const { Categories, Transaction } = require("../models/model");

const createCategories = async (req, res) => {
  try{
    const cat = new Categories(req.body)
    await cat.save()
    res.status(201).send(cat)
  }catch(e){
    res.status(500).send(e)
  }
};

const getAllCategories = async (req, res) => {
    try{
        const categories = await Categories.find()
        res.status(200).send(categories)
    }catch(e){
        res.status(500).send(e)
    }
}

const getOneCategory = async (req, res) => {
    try{
        const cat = await Categories.findById(req.params.id)
        res.status(200).send(cat)
    }catch(e){
        res.status(500).send(e)
    }
}

const deleteOneCategory = async (req, res) => {
    try{
        const cat = await Categories.findByIdAndDelete(req.params.id)
        res.status(201).send(cat)
    }catch(e){
        res.status(500).send(e)
    }
}


// Transactions

const createTransaction = async (req, res) => {
    try{
        const transaction = new Transaction(req.body)
        transaction.date = new Date()
        await transaction.save()
        res.status(201).send(transaction)
    }catch(e){
        res.status(500).send(e)
    }
}

const getAllTransactions = async (req, res) => {
    try{
        const transactions = await Transaction.find()
        res.status(200).send(transactions)
    }catch(e){
        res.status(500).send(e)
    }
}

const getOneTransaction = async (req, res) => {
    try{
        const transaction = await Transaction.findById(req.params.id)
        res.status(200).send(transaction)
    }catch(e){
        res.status(500).send(e)
    }
}

const deleteOneTransaction = async (req, res) => {
    try{
        const transaction = await Transaction.findByIdAndDelete(req.params.id)
        res.status(200).send(transaction)
    }catch(e){
        res.status(500).send(e)
    }
}

// Get Labels
const getAllLabels = async (req, res) => {
    try{
        const data = await Transaction.aggregate([
            {
                $lookup: {
                    from: "categories",
                    localField: "type",
                    foreignField: "type",
                    as: "categoriesInfo"
                }
            },
            {
                $unwind: "$categoriesInfo"
            }
        ])

        let result = data.map( v => Object.assign({}, {_id: v._id, name: v.name, type: v.type, amount: v.amount, color: v.categoriesInfo.color}))

        res.status(200).send(result)
    }catch(e){
        res.status(400).send(e)
    }
}

module.exports = { createCategories, getAllCategories, getOneCategory, deleteOneCategory, createTransaction, getAllTransactions, getOneTransaction, deleteOneTransaction, getAllLabels };
