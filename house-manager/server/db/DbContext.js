import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { System } from '../models/System'
import { Appliance } from '../models/Appliance'
import { Note } from '../models/Note'

class DbContext {
  Notes = mongoose.model('Note', Note)
  Systems = mongoose.model('System', System);
  Appliances = mongoose.model('Appliance', Appliance);
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
