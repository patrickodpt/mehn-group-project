const express = require ('express')
const accountAPI = require ('../models/model.js')
const accountRouter = express.Router()


accountRouter.get('/', function(req, res) {
    accountsApi.getAccounts()
      .then(accounts => {
        res.send(accounts)
      })
  })
  

accountRouter.get('/new', function(req, res) {
    res.send(accountsApi.createAccount());
  })


  
  module.exports = {
      accountRouter
  }