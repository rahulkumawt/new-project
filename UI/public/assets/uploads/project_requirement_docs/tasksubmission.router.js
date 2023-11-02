import express from 'express';

const router = express.Router();

//import controller
import * as TasksubmissionController from '../controller/tasksubmission.controller.js'; 

router.post("/save",TasksubmissionController.save);

router.get("/fetch",TasksubmissionController.fetch);

router.delete("/delete",TasksubmissionController.DeleteTasksubmission);

router.patch("/update",TasksubmissionController.UpdateTasksubmission);

export default router;