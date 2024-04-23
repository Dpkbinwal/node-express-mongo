import express from 'express';
import StudentController from '../controllers/studentController.js';

const router=express.Router();

router.get('/example',StudentController.example_session);
router.get('/device',StudentController.example_session_dev);

export default router;