const mongoose = require("mongoose")
const { connect, connection } = mongoose

function getAccountInfoFromDatabase(accountId) {
    return `Info account ${accountId}`;
} 

function updateAccountInfo(accountId) {

}

function createAccount(user, pass) {

}

function deleteAccount(accountId) {

}

module.exports = { getAccountInfoFromDatabase, updateAccountInfo, createAccount, deleteAccount }