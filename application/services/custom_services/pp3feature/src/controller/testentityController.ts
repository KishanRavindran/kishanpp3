import { Request, Response } from 'express';
import { testentityService } from '../service/testentityService';
import { CustomLogger } from '../config/Logger'
let testentity = new testentityService();

export class testentityController {
    
    constructor() { }
    
    public GpSearchForUpdate(req: Request, res: Response) {
testentity.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
testentity.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
testentity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
testentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpCreate');
    })}
public GpDelete(req: Request, res: Response) {
testentity.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
testentity.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpSearch');
    })}


}