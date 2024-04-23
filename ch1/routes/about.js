import express from 'express';
import detail from '../controllers/aboutController.js';
const router=express.Router();

router.get('/about',detail)

export default router;