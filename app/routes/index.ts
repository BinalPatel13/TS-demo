import {Request, Response} from "express";
import {StudentController} from '../controllers/studentController';

export class Routes { 

    studentController: StudentController = new StudentController();

    public routes(app: any): void { 
        app.route('/')
            .get((req: Request, res: Response) => {            
                res.status(200).send('Hello Good World!');
        });  
        
        app.route('/api/students')
            .get(this.studentController.getStudents);

        app.route('/api/students')
            .post(this.studentController.addNewStudent);

        app.route('/api/students/:studentId')
            .get(this.studentController.getStudentById);

        app.route('/api/students/:studentId')
            .put(this.studentController.updateStudent);
        
        app.route('/api/students/:studentId')
            .delete(this.studentController.deleteStudent);
        
        app.route('/api/dummy')
            .get(this.studentController.generateDummyData);

    }
}
