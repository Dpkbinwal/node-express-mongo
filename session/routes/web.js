import express from 'express';
import StudentController from '../controllers/studentController.js';

const router=express.Router();

router.get('/get_session_info',StudentController.get_session_info);
router.get('/destroy_session',StudentController.destroy_session);
router.get('/example',StudentController.example_session);
router.get('/device',StudentController.example_session_dev);

export default router;