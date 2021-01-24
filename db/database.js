const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/election.db', err => {
    if (err) {
        return console.error(err.message)
    }
    console.log('Connected to the election database.')
})

db.get("PRAGMA foreign_keys = ON")

module.exports = db;