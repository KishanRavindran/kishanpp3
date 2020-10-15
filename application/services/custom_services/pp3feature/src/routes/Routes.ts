import { Request, Response, NextFunction } from "express";
import { testentityController } from '../controller/testentityController';


export class Routes {
    private testentity: testentityController = new testentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/testentity/get/update').put(this.testentity.GpSearchForUpdate);
app.route('/testentity').put(this.testentity.GpUpdate);
app.route('/testentity').get(this.testentity.GpGetAllValues);
app.route('/testentity').post(this.testentity.GpCreate);
app.route('/testentity/:id').delete(this.testentity.GpDelete);
app.route('/testentity/get/search').get(this.testentity.GpSearch);
     }

}