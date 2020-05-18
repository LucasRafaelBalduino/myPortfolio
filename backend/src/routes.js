import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import ProjectController from './controllers/ProjectController';

const router = Router();
const upload = multer(uploadConfig);

router.post('/create-project', upload.single('image'), ProjectController.store);

router.get('/create-project', ProjectController.index);

router.put('/create-project/:id', ProjectController.update);

router.delete('/create-project/:id', ProjectController.delete);


export default router;
