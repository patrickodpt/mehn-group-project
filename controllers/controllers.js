const express = require('express')
const accountsApi = require('../models/model.js')
const accountRouter = express.Router()


accountRouter.get('/', function (req, res) {
  accountsApi.getAccounts()
    .then(accounts => {
      res.render('allProfiles', {accounts})
    })
})


accountRouter.get('/new', function (req, res) {
  res.render(accountsApi.createBlankAccount());
})



accountRouter.get('/:id', function (req, res) {
  accountsApi.getAccount(req.params.id)
    .then((account) => {
      res.render('singleProfile', {account})
    })
})

accountRouter.post('/', function (req, res) {
  accountsApi.addAccount(req.body)
    .then(() => {
      res.render('Account created');
    })
})

accountRouter.put('/:id', function (req, res) {
  accountsApi.updateAccount(req.params.id, req.body)
    .then(() => {
      res.render('Account updated');
    })
})

accountRouter.delete('/:id', function (req, res) {
  accountsApi.deleteAccount(req.params.id)
    .then(() => {
      res.render('Account deleted');
    })
})

module.exports = {
  accountRouter
}
