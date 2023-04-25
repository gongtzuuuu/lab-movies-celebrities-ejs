/* --- 1. Require mongoose --- */
const { Schema, model } = require('mongoose')

/* --- 2. New a celebrity schema --- */
const moviesSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
    },
    plot: {
        type: String,
    },
    cast: {
        type: [ObjectId],
		ref: Celebrity,
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

/* --- 3. Export the schema --- */
const Movie = model('Movie', moviesSchema)

module.exports = Movie