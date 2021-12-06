import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'

class DbContext {
  Systems = mongoose.model('System', SystemSchema);
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
