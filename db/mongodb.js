const { MongoClient, ServerApiVersion } = require('mongodb')

const uri = process.env.MONGODB_URI

console.log(uri, '- uri')

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

let db

async function connect() {
  if (!db) {
    await client.connect()
    db = client.db('application')
  }
  return db
}

module.exports = { connect }
