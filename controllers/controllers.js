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
  accountsApi.getAccount(req.params.accountId).then(
    account => {
      res.render('editProfile', {account})
    }
  )
})

//when new account is submitted it goes here.
accountRouter.post('/', function(req, res){
  accountsApi.addAccount(req.body).then(
    () => {
      res.redirect('/accounts/')
    })
})

accountRouter.put('/:accountId', function(req,res){
  accountsApi.updateAccount(req.params.accountId, req.body).then(
    () => {
      res.redirect('/accounts/')
    }
  )
})

accountRouter.delete('/:accountId', function(req,res){
  accountsApi.deleteAccount(req.params.accountId).then(
    () => {
      res.redirect('/accounts/')
    })
})

module.exports = {
    accountRouter
}
