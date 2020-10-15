import * as mongoose from 'mongoose';
import testentityModel from '../models/testentity';
import { CustomLogger } from '../config/Logger'


export class testentityDao {
    private testentity = testentityModel;
    constructor() { }
public GpSearchForUpdate(testentityData, callback){
new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpSearchForUpdate')

this.testentity.findOneAndUpdate({ _id: testentityData._id }, testentityData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(testentityData, callback){
new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpUpdate')

this.testentity.findOneAndUpdate({ _id: testentityData._id }, testentityData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpGetAllValues')

this.testentity.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(testentityData, callback){
new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpCreate')
let temp = new testentityModel(testentityData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(testentityId, callback){
new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpDelete')

this.testentity.findByIdAndRemove(testentityId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(testentityData, callback){
new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(testentityData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.testentity.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}


}