
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const testentitySchema = new Schema({
   test1: String,
   test2: String
})

const testentityModel = mongoose.model('testentity', testentitySchema, 'testentity');
export default testentityModel;
