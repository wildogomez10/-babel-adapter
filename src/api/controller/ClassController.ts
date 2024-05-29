import { Request, Response } from "express";
import { ClassService } from "../service";

const classService = new ClassService();

export class ClassController {
    public static async getAllUsers(req: Request, res: Response) {
        await classService.loadClasses();
        res.json({
            message: '00',
            funciona: true
        });
    }
}
