import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const Note = new Schema(
  {
    body: { type: String, required: true },
    systemId: { type: Schema.Types.ObjectId, ref: 'System' },
    applianceId: { type: Schema.Types.ObjectId, ref: 'Appliance' },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
    // images: How do I let them upload images???

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Note.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

Note.virtual('system', {
  localField: 'systemId',
  ref: 'System',
  foreignField: '_id',
  justOne: true
})
Note.virtual('appliance', {
  localField: 'applianceId',
  ref: 'Appliance',
  foreignField: '_id',
  justOne: true
})
