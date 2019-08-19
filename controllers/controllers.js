const express = require ('express')
const accountsApi = require ('../models/model.js')
const accountRouter = express.Router()


accountRouter.get('/', function(req, res) {
    accountsApi.getAccounts()
      .then(accounts => {
        res.render('allProfiles', {accounts})
      })
})

accountRouter.get('/:accountId', function(req, res) {
    accountsApi.getAccount(req.params.accountId)
      .then(account => {
        res.render('singleProfile', {account})
      })
})

accountRouter.get('/new', function(req, res) {
  res.render(accountsApi.createBlankAccount());
})
  // accountRouter.get('/:accountId', function(req,res){
  //   accountsApi.getAccount(req.params.accountId)
  //     .then(account => {
  //       res.send(account)
  //     })
  // })


  accountRouter.post('/', function(req, res){
    accountsApi.addAccount(req.body)
      .then(() => {
        res.send('Account created');
      })
  })

  accountRouter.put('/:accountId', function(req,res){
    accountsApi.updateAccount(req.params.accountId, req.body)
      .then(() => {
        res.send('Account updated');
      })
  })

  accountRouter.delete('/:accountId', function(req,res){
    accountsApi.deleteAccount(req.params.accountId)
      .then(() => {
        res.send('Account deleted');
      })
  })

  module.exports = {
      accountRouter
  }
