import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => res.json({ message: 'Hello!12223' }));

export default router;
