const mongoose = require('./connection.js')

const AccountSchema = mongoose.Schema(
  {
    name: String,
    single: Bool,
    numberOfFriends: Number
  }
)

const AccountCollection = mongoose.model('Account', AccountSchema)
