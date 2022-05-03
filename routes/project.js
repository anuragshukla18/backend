const express = require ('express');
const app = express ();
const router = express.Router ();
const auth = require ('../middleware/auth');
// Controllers
let project_controller = require ('../controllers/projectController');

router.get ('/', auth, project_controller.list); 
router.post ('/create', auth, project_controller.create); 



module.exports = router;