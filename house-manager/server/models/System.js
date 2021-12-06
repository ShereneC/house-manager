import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SystemSchema = new Schema(
  {
    name: [{ type: String, required: true }]

  },
  { timestamps: true, toJSON: { virtuals: true } }
)
