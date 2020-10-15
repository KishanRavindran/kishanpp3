import { Request, Response } from 'express';
import {testentityDao} from '../dao/testentityDao';
import { CustomLogger } from '../config/Logger'
let testentity = new testentityDao();

export class testentityService {
    
    constructor() { }
    
    public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpSearchForUpdate')
     const  testentityData = req.body;
     testentity.GpSearchForUpdate(testentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpUpdate')
     const  testentityData = req.body;
     testentity.GpUpdate(testentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpGetAllValues')
     
     testentity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpCreate')
     const  testentityData = req.body;
     testentity.GpCreate(testentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpCreate')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpDelete')
     const  testentityId = req.params.id;
     testentity.GpDelete(testentityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpSearch')
     const  testentityData = req.query;
     testentity.GpSearch(testentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpSearch')
         callback(response);
         });
    }


}