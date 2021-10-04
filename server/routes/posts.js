//all routes
import express from 'express';
import { getPosts , createPost} from '../controllers/posts.js';
//va amb {} perque no hem fet un export default a posts de controllers sino un export

const router = express.Router();

router.get('/', getPosts);
router.get('/', createPost);

export default router;