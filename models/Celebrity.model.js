/* --- 1. Require mongoose --- */
const { Schema, model } = require('mongoose')

/* --- 2. New a celebrity schema --- */
const celebsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      enum: ['actor', 'singer', 'comedian', 'unknown'],
      //required: true,
    },
    catchPhrase: {
      type: String,
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

/* --- 3. Export the schema --- */
const Celebrity = model('Celebrity', celebsSchema)

module.exports = Celebrity