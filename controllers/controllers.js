const express = require ('express')
const accountsApi = require ('../models/model.js')
const accountRouter = express.Router()


accountRouter.get('/', function(req, res) {
    accountsApi.getAccounts()
      .then(accounts => {
        res.render('allProfiles', {accounts})
      })
})

accountRouter.get('/new', function(req, res) {
  res.render('createProfile') //this simply takes user to '/new' to create their account.
})

// :::::BELOW WAS COMMENTED OUT FOR TEST::::::
//   accountsApi.createBlankAccount().then(
//     (account) => {res.render('createProfile', {account})}
//   )
// })
// accountRouter.get('/:accountId', function(req,res){
//   accountsApi.getAccount(req.params.accountId)
//     .then(account => {
//       res.send(account)
//     })
// })


accountRouter.get('/:accountId', function(req, res) {
    accountsApi.getAccount(req.params.accountId)
      .then(account => {
        res.render('singleProfile', {account})
      })
})

//when new account is submitted it goes here.
accountRouter.post('/', function(req, res){
  accountsApi.addAccount(req.body).then(
    accounts => {
      res.redirect('/accounts/')
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
