const mongoose = require('./connection.js')

const AccountSchema = mongoose.Schema(
  {
    name: String,
    single: Boolean,
    numberOfFriends: Number
  }
)

const AccountCollection = mongoose.model('Account', AccountSchema)

const createBlankAccount = () => {
  return AccountCollection.create({
    name: "",
    single: false,
    numberOfFriends: 0
  })
}

const getAccounts = () => { return AccountCollection.find() }

const getAccount = (id) => { return AccountCollection.findById(id) }

const addAccount = (accountNew) => { return AccountCollection.insertMany([ accountNew])}

const updateAccount = (id, account) => {
  return AccountCollection.findOneAndUpdate({_id: id}, account)
}

module.exports = {
  createBlankAccount,
  getAccounts,
  getAccount,
  addAccount,
  updateAccount
}
