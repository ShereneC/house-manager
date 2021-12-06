import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const System = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    needsService: { type: Boolean, default: false },
    lastServiced: { type: String, default: 'Never Serviced' },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
    // images: How do I let them upload images???

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

System.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
